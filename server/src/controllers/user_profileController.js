import { pool } from "../config/db.js";


export const post_user_profile = async(req,res)=>{

    try{
    console.log("here")
    const {username, id} = res.locals?.response.body.user;
    const tag="noob";
    const streak_count = 1;
   const xp = 1;	
   const grade = 99;	
   
    if(tag==null || streak_count==null || xp==null || username==null || grade==null || id==null ){
       return res.status(400).json({message: "something is missing"});
    }
    
    const {rows} = await pool.query('INSERT INTO user_profile(user_id, tag, streak_count, xp, user_name, grade) VALUES ($1,$2,$3,$4,$5, $6) RETURNING *', [
       id, tag, streak_count, xp, username, grade
    ]
)
    console.log(rows[0]);

    const {token, user} = res.locals.response.body
    const {status} = res.locals.response
    res.status(status).json({ token, user});
}catch(err){
    console.log('his is coming from user_profile ', err.message);
}

}

export const update_user_profile = async (req, res)=>{

    //const paramKeys = Object.keys(req.params).filter(item=>item!="id"); //this just gives the keys from params and removes values
    //const paramValues = Object.values(req.params); //this just gives the keys from params and removes values
    
    const keys = Object.keys(req.body); //takes all the keys
    const userid= req.params.id; //gets the user id 

  if (keys.length === 0) {
      return res.status(400).json({ error: "No fields to update" });
    }

       const setCol = keys.map((k, i)=> `${k}= $${i+1}`).join(", ") //goes through all the keys and creates sql query part for the keys and $1,2,3,4 //join makes sure that , is not added at the far end
       const values = keys.map((k)=>req.body[k]); //maps over how many keys are there and then adds the req.body[keys]=> which gives value of that key and saves it into values so later we can add userid and make it dynmic
       values.push(userid);
    
    const sql = 
    `
     UPDATE user_profile
     SET ${setCol}
     WHERE userid = $${keys.length +1}
     RETURNING *;
    `;
try{
    const {rows} = await pool.query(sql, values);
    res.status(200).json({data: rows[0]});
}catch(err){
    console.log("from trying to update user_profile "+ err.message);
}
}

export const get_user_profile = async(req, res)=>{

    try{
        //write sql here call pool  and we are good to go
        const user_id = req.user;
        console.log();
        
        return res.json(user_id);
    }catch(err){

        console.log(err);
        res.send(err.message);
    }
}