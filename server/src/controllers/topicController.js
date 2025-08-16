import {pool} from '../config/db.js'


 export const getTopics= async (req, res)=>{

    try{

        //we can pass the token to a middleware
        const {rows} = await pool.query('SELECT * FROM topics');
        console.log(rows + " ksdhds");
        res.status(200).json({data: rows})
    }catch(err){

        console.log(err);
    }

}

 export const postTopics= async (req, res)=>{

    const {slug, name, scenes} = req.body;
    try{

        //we can pass the token to a middleware
        const {rows} = await pool.query('INSERT into topics (slug, topic_name, total_scenes) VALUES ($1,$2,$3) RETURNING *', [slug, name, scenes]);
        console.log(rows[0]);
        res.status(201).json({data: rows[0]})
    }catch(err){

        console.log(err);
        res.status(500).json(err.message);
    }

}

