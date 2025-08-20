import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../../../lib/api.js'
import { useParams } from "react-router-dom";
import SceneButton from '../../../ui/SceneButton.jsx'
import { useScenes } from '../../../../context/ScenesContext.jsx';
export default function Banking(){


const {scenes, err, loading} = useScenes();
    
const[totalButtons, setTotalButtons] = useState(0);
const [activeIndex, setActiveIndex] = useState(0);
 
if(loading){
  return <h1>Loading..</h1>
}
if(err){
  return <h1>{err}</h1>
}
  return(
    <>
       <div className="flex flex-row">
     {scenes.map((s, idx)=>(
      <SceneButton
      key={s.scene_id}
      topicId={s.topic_id}
      number= {s.number}
      title = {s.title}
      />
    ))
     }
    </div>
 
</>
  )

}

