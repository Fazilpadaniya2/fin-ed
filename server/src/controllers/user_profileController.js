import { pool } from "../config/db";


export const post_user_profile = async(req,res)=>{

    const {tag, streak_count, xp, name, grade, uuid} = req.body;

    if(!tag || !streak_count || !xp || !name || !grade ||!uuid ){
        res.status(400).json({message: "something is missing"});
    }
    try{
    const {rows} = await pool.query('INSERT INTO user_profile(uuid, tag, streak_count, xp, name, grade) VALUES ($1,$2,$3,$4,$5. $6) RETURING *', [
        tag, streak_count, xp, name, grade, uuid
    ]
)
    console.log('this is coming from user_profile;  ' + rows.data);
    res.status(201).json({data: rows[0]})
}catch(err){
    console.log('his is coming from user_profile '+ err.message);
}

}

export const updat_user_profile = async (req, res)=>{

    //const paramKeys = Object.keys(req.params).filter(item=>item!="id"); //this just gives the keys from params and removes values
    //const paramValues = Object.values(req.params); //this just gives the keys from params and removes values
    
    const keys = Object.keys(req.body); //takes all the keys
    const uuid= req.params.id; //gets the user id

  if (keys.length === 0) {
      return res.status(400).json({ error: "No fields to update" });
    }

       const setCol = keys.map((k, i)=> `${k}= $${i+1}`).join(", ") //goes through all the keys and creates sql query part for the keys and $1,2,3,4 //join makes sure that , is not added at the far end
       const values = keys.map((k)=>req.body[k]); //maps over how many keys are there and then adds the req.body[keys]=> which gives value of that key and saves it into values so later we can add uuid and make it dynmic
       values.push(uuid);
    
    const sql = 
    `
     UPDATE user_profile
     SET ${setCol}
     WHERE uuid = $${keys.length +1}
     RETURNING *;
    `;
try{
    const {rows} = await pool.query(sql, values);
    res.status(200).json({data: rows[0]});
}catch(err){
    console.log("from trying to update user_profile "+ err.message);
}
}
