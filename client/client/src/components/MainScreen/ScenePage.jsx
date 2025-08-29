import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import api from "../../lib/api";
import  Quiz  from "../ui/scene/Quiz.jsx";
import  Video  from "../ui/scene/Video.jsx";
import  Story  from "../ui/scene/Story.jsx";
import { act } from "react";


export default function ScenePage( ) {
 
    const {scene_id, topicid} = useParams();
    const [acts, setActs] = useState([]);
    const [actIndex, setActIndex]= useState(0);
    const [loading, setLoading]= useState(false);
    const [err, setErr]= useState("");
    const navigate = useNavigate();
    useEffect(() => {
      
        async function fetchActs() {
            
        
        try{
            setLoading(true);
            const {data} = await api.get(`/scenes/${scene_id}/acts`);
            console.log("fetching succeful");
            console.log(data.data);
            setActs(data.data);
            setActIndex(0);
           // console.log(acts); this will show old value since setActs works
            //can;t asign acts[index] because setActs is async 

        }catch(err){
            setErr(err.message)
        }finally{
            setLoading(false);
        }
    
        }

        fetchActs();
    }, [scene_id])


    async function is_completed(a_boolean){


      try{
        console.log("trying to post " + a_boolean)

        const {data} = await api.post(`/scenes/${scene_id}/completed`, { is_completed: a_boolean })
        console.log(data.data)
    }catch (err){
      console.log(err.message);
    }
    
    }
    const currentAct = acts[actIndex];

    function handleNext(){
      if(actIndex+1 < acts.length){
      setActIndex((prev) => prev + 1);
    }else{
      is_completed(true);
      navigate(`/topics/${topicid}`);
    }
    }
    console.log(currentAct );
    

    if (loading) {
        return(<h1>Loading...</h1>)
    }
    if(err){
        return(<h1>{err.message}</h1>)
        
    }
  return (
      <>
      <h1>hello</h1>
      {currentAct && (
          <div className="max-w-2xl mx-auto mt-10">
      {currentAct.act_type === "story" && (
        <Story content={currentAct.act_content} onComplete={handleNext} />
      )}

      {currentAct.act_type === "quiz" && (
        <Quiz
          question={currentAct.question}
          option_a={currentAct.option_a}
          option_b={currentAct.option_b}
          option_c={currentAct.option_c}
          option_d={currentAct.option_d}
          answer={currentAct.right_answer}
          onComplete={handleNext}
          postCompleted = {is_completed}
        />
      )}

      {currentAct.act_type === "video" && (
        <Video
          url={currentAct.act_content}
          onComplete={handleNext}
        />
      )}
    </div>
  )}
    <Outlet />
    </>
  );
}
