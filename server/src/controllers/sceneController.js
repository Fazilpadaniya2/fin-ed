import {pool} from "../config/db.js"

export const getScenes= async (req, res)=>{


    try{

        const {rows} = await pool.query("SELECT * FROM scenes");
        res.send(200).json({data: rows});
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
        }
        //assigning
        const topicId = topicRes.rows[0].topic_id;

        //inserting
        const {rows} = await pool.query("INSERT INTO scenes (topic_id, title) VALUES($1, $2) RETURNING *", [topicId, sceneTitle]);
        res.status(201).json({data: rows[0]})
    }catch(err){
        res.send(err.message);
    }
}