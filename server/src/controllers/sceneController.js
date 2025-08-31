import {pool} from "../config/db.js"

export const getScenes= async (req, res)=>{


    try{
        const topicsId = Number(req.params.topicid);
        console.log(topicsId + "it reached sceneController")


            //here i have changes topicSId to topicId
           
            if(Number.isInteger(topicsId)==false || topicsId<=0){
                res.status(400).json({error:"Invalid topicId"})
            }
            const sql = `
            SELECT * FROM scenes WHERE topic_id = $1 `;

            const {rows} = await pool.query(sql, [topicsId]);
            console.log(rows + "coming from specific topic id")
            res.status(200).json({data: rows})

        
    }catch(err){

        console.log(err);
        res.send(err.message);
    }
}


export const postScenes = async (req,res)=>{

    try{

        const {topicName, sceneTitle} = req.body;

        //getting topic id
        const topicRes = await pool.query("SELECT topic_id FROM topics where topic_name = $1", [topicName]);
        console.log("got topic id");

        //checking if the result is not empty
        if(topicRes.rows.length ===0){
            return res.status(404).json({error: 'topic name not found'});
        }else{
        //assigning
        const topicId = topicRes.rows[0].topic_id;

        //inserting
        const {rows} = await pool.query("INSERT INTO scenes (topic_id, title) VALUES($1, $2) RETURNING *", [topicId, sceneTitle]);
        res.status(201).json({data: rows[0]})
        }
    }catch(err){
        res.status(err.message);
    }
}

export const setSceneCompleted = async(req, res)=>{


    try{

        const user_id = req.user.user_id;
        const scene_id = Number(req.params.sceneid);
        const {is_completed} = req.body;

        if(!Number.isInteger(scene_id) || scene_id<=0){
            return res.status(400).json({error: 'scene_id is not a integer'});

        }
       
        const sql = `
        INSERT INTO user_scene_progress (user_id, scene_id, is_completed, completed_at)
        VALUES ($1,$2,$3, CASE WHEN $3 THEN NOW() ELSE NULL END)
          ON CONFLICT (user_id, scene_id)
        DO UPDATE SET
        is_completed = EXCLUDED.is_completed,
        completed_at = CASE WHEN EXCLUDED.is_completed THEN NOW() ELSE NULL END

        RETURNING user_id, scene_id, is_completed
        `;
        
       const {rows} =  await pool.query(sql, [user_id, scene_id, is_completed]);

        if (rows.length === 0) {
      return res.status(404).json({ error: 'Scene not found' });
    }
    return res.status(200).json({
        data : rows[0],
        message: 'scene id updated to complete'
    })
       
    }catch(err){
   return res.status(500).json({ error: 'Internal server error' });
        console.log(err.message);
    }
}

export const getSceneCompleted = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const sceneId = Number(req.params.sceneid);

    if (!Number.isInteger(sceneId) || sceneId <= 0) {
      return res.status(400).json({ error: "sceneid must be a positive integer" });
    }

    const sql = `SELECT scene_id, is_completed FROM user_scene_progress WHERE scene_id = $1 AND user_id =$2`;
    const { rows } = await pool.query(sql, [sceneId, user_id]);

    if (rows.length === 0) {
      return res.status(200).json({ scene_id: sceneId, is_completed: false, completed_at: null });
    }

    return res.status(200).json({ data: rows[0] });
  } catch (err) {
    console.error("getSceneCompleted error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
