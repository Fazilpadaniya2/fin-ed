import {pool} from "../config/db.js"

export const getScenes= async (req, res)=>{


    try{
        const {id} = req.user;
        const topicsId = Number(req.params.topicid);
        console.log(topicsId + "it reached sceneController")


            
           
            if(Number.isInteger(topicsId)==false || topicsId<=0){
                res.status(400).json({error:"Invalid topicId"})
            }
            const sql = `
            SELECT 
  scenes.*, 
  user_scene_progress.is_completed
FROM scenes
LEFT JOIN user_scene_progress
  ON scenes.scene_id = user_scene_progress.scene_id
  AND user_scene_progress.user_id = $1
WHERE scenes.topic_id = $2`;

            const {rows} = await pool.query(sql, [id, topicsId]);
            console.log("coming from  getscene  got the scenes's 🤩", rows)
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

export const post_user_scene_progress = async(req, res)=>{


    try{

        const{scene_id} = req.params;
        const {id} = req.user;
        const{is_completed} = req.body;
        console.log(id, scene_id, is_completed, "70 line SceneControleer")
      
       
        const sql = `
        INSERT INTO user_scene_progress(user_id, scene_id, is_completed) 
        VALUES($1,$2,$3)
        RETURNING *
        `;
        
       const {rows} =  await pool.query(sql, [id, scene_id, is_completed]);

        if (rows.length === 0) {
      return res.status(404).json({ error: 'Scene not found' });
    }
    try{
        console.log( "coming from 89");
        const {data} = await pool.query(`UPDATE user_profile SET xp = xp + 10 WHERE user_id = $1`,[id])
        }catch(err){
        }
    return res.status(200).json({
        data : rows[0],
        message: 'scene id updated to complete'
    })
       
    }catch(err){
            console.log(err + "coming from 89");
      console.log(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
}

// export const getSceneCompleted = async (req, res) => {
//   try {
//     const user_id = req.user.user_id;
//     const sceneId = Number(req.params.sceneid);

//     if (!Number.isInteger(sceneId) || sceneId <= 0) {
//       return res.status(400).json({ error: "sceneid must be a positive integer" });
//     }

//     const sql = `SELECT scene_id, is_completed FROM user_progress WHERE scene_id = $1 AND user_id =$2`;
//     const { rows } = await pool.query(sql, [sceneId, user_id]);

//     if (rows.length === 0) {
//       return res.status(200).json({ scene_id: sceneId, is_completed: false, completed_at: null });
//     }

//     return res.status(200).json({ data: rows[0] });
//   } catch (err) {
//     console.error("getSceneCompleted error:", err);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };
