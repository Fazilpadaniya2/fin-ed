import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../lib/api.js'
import { useParams } from "react-router-dom";
import SceneButton from '../ui/SceneButton.jsx'


export default function Topics(){


const[scenes, setScenes] = useState([]);
const[loading, setLoading] = useState(false);
const[err, setErr] = useState("");

const {topicid} = useParams();

useEffect(() => {
  
  async function getScenes(){
    try{
      setLoading(true);
      const {data} = await api.get(`/topics/${topicid}/scenes`); //fetch
      setScenes(data.data); //set
      
    }
    catch(err){
      console.log(err.message);
      setErr(err.message);
    }finally{
      setLoading(false);
    }
  }

  getScenes();

 
}, [topicid])
if (loading) return <h1>Loading…</h1>

if (err) return <h1>{err}</h1>

  return(
    <>
       <div className="flex flex-row">
     {scenes.map((s, idx)=>(
      <SceneButton
      key={s.scene_id}
      scene_id = {s.scene_id}
      topicId={s.topic_id}
      number= {s.number}
      title = {s.title}
      />
    ))
     }
     <Outlet />
    </div>
 
</>
  )

}

