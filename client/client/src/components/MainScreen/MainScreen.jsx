import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import TopicCard from "../ui/topicCard.jsx"
import { useTopics } from "../../context/TopicsContext.jsx"

export default function MainScreen(){

const {topics, err, loading} = useTopics();

if(loading===true){
  <h1>Loading...</h1>
}
if(err){
  <h1>{err}</h1>
}
return(
    <>


   <div>
      <h2>Select a course</h2>
      <div className="flex gap-4 flex-col">
        

    {topics.map((t, idx) => (
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