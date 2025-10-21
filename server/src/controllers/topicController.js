import {pool} from '../config/db.js'


 export const getTopics= async (req, res)=>{

    try{
        //we can pass the token to a middleware
        const {rows} = await pool.query('SELECT * FROM topics');
        console.log(rows + " coming from line 9 topicControllers.js");
        res.status(200).json({data: rows})
    }catch(err){

        console.log(err);
    }

}

 export const postTopics= async (req, res)=>{

    const {slug, name, scenes} = req.body;
    try{

        // can pass the token to a middleware
        const {rows} = await pool.query('INSERT into topics (slug, topic_name, total_scenes) VALUES ($1,$2,$3) RETURNING *', [slug, name, scenes]);
        console.log(rows[0]);
        res.status(201).json({data: rows[0]})
    }catch(err){

        console.log(err);
        res.status(500).json(err.message);
    }

}

export const post_user_topics_progress = async (req,res)=>{
   const{userId, topicId} = req.params;
   const{status} = req.body;
     if(status=="continue"){
   try{

  
    await pool.query('INSERT into user_topic_progress(user_id, topic_id) VALUES($1,$2)',[userId, topicId])
    res.status(201);
    console.log("coming from topicController postTopicProgress updated ✅");
   }catch(err){
    console.log(err.message + "coming from topicController, postTopicProgress Update nhi hua");
   }
}
}

