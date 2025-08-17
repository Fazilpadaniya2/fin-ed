import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../../../lib/api.js'
import { useParams } from "react-router-dom";
import SceneButton from '../../../ui/SceneButton.jsx'
export default function Banking(){



    
    const { scene, act } = useParams(); // expecting route like /dashboard/banking/s1/a1
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);
const[totalButtons, setTotalButtons] = useState(0);
const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    

    fetchAct();
  }, []);
  return(
    <>
       <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: totalButtons }, (_, i) => (
        <SceneButton
          key={i}
          id={i + 1}
          Active={i === activeIndex}
          click={() => setActiveIndex(i)}
        />
      ))}
    </div>
 
</>
  )

}

