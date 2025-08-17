import { Link } from "react-router-dom"
import api from '../../lib/api.js'
import { useEffect, useState } from "react"
import TopicCard from "../ui/topicCard.jsx"


export default function MainScreen(){

const [result, setResult] = useState([]);

useEffect(() => {

  async function getTopics(){

    const {data} = await api.get('/gettopics');
   setResult( data.data);
    console.log(data.data);
  }
getTopics();
}, [])

return(
    <>


   <div>
      <h2>Select a course</h2>
      <div className="flex gap-4 flex-col">
        
    {result.map((t, idx) => (
            <TopicCard
              key={idx}
              name={t.topic_name}
              position={t.topic_position}
              totalScenes={t.total_scenes}
              status={t.is_active}
            />
          ))}
      </div>
    </div>

    </>
)
    
}