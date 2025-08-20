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