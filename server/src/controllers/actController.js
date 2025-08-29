import {pool} from "../config/db.js";

export const getActs = async (req, res) => {
  try {
    const sceneId = Number(req.params.sceneid);
    console.log("got the scene id " + sceneId);
    //const actsOrder = req.params.actorder;

    if(Number.isInteger(sceneId) ==false || sceneId <=0){

      return res.status(400).json({error: "invalid SceneId"});
    }

    //if act is "all" then send all
    

      const sqlAll = `
      SELECT 
      a.act_id, a.scene_id, a.act_order, a.act_type, a.act_content,
      q.question, q.option_a, q.option_b, q.option_c, q.option_d, q.right_answer
      FROM acts a
      LEFT JOIN act_quiz q ON q.act_id = a.act_id AND  a.act_type='quiz'
      WHERE a.scene_id = $1
      ORDER BY a.act_order; `

      const {rows} = await pool.query(sqlAll, [sceneId]);
      
      res.status(200).json({data: rows})
    
//     }else{
//     //if acts is specific number then send specific act 
//     // acts to act
//     const actOrder = Number(actsOrder);
//     if(!Number.isInteger(actOrder)|| actOrder<=0){
//       res.status(400).json({error: "inavlid act id, rather type all or positive integere"})
//     }

//     const sqlOne = `
//     SELECT 
//     a.act_id, a.scene_id, a.act_order, a.act_type, a.act_content,
//     q.question, q.option_a, q.option_b, q.option_c, q.option_d, q.rigth_answer
//     FROM acts a
//     LEFT JOIN act_quiz q ON a.act_id = q.act_id AND a.act_type = "quiz"
//     WHERE a.scene_id = $1 AND a.act_order = $2
//     `
//     const {rows} = await  pool.query(sqlOne, [sceneId, actOrder]);
//  if (result.rowCount === 0) {
//       return res.status(404).json({ error: 'Act not found for that scene/order' });
//     }
//     res.status(200).json({data: rows[0]});
//   }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



