import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../lib/api";
import { Quiz } from "../ui/scene/Quiz";

export default function ScenePage({ sceneId }) {
 
    const {scene_id} = useParams();
    const [acts, setActs] = useState([]);
    const [currentAct, setCurrentAct]= useState(null);
    const [actIndex, setActIndex]= useState(0);
    const [loading, setLoading]= useState(false);
    const [err, setErr]= useState("");

    useEffect(() => {
      
        async function fetchActs() {
            
        
        try{
            setLoading(true);
            const {data} = await api.get(`/${scene_id}/all`);
            console.log("fetching succeful");
            setActs(data.data);
            setCurrentAct(acts[actIndex]);
        }catch(err){
            setErr(err.message)
        }finally{
            setLoading(false);
        }
    
        }

        fetchActs();
    }, [])

    function handleNext(){
        setActIndex(actIndex+1);
        setCurrentAct(setActIndex);
    }
    

    if (loading) {
        return(<h1>Loading...</h1>)
    }
    if(err){
        return(<h1>{err.message}</h1>)
        
    }
  return (
      <div className="max-w-2xl mx-auto mt-10">
   
      {currentAct.type === "story" && (
        <Story content={currentAct.content} onComplete={handleNext} />
      )}
    
      {currentAct.type === "quiz" && (
        <Quiz
          question={currentAct.question}
          options={currentAct.options}
          answer={currentAct.answer} //check
          onComplete={handleNext}
        />
      )}
       {currentAct.type === "quiz" && (
        <Video
         url = {currentAct.url}
          onComplete={handleNext}
        />
      )}
    </div>
  );
}
