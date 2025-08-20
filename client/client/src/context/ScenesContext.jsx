import { useContext, createContext, useEffect, useState } from "react";
import api from '../lib/api.js'


const SceneCtx = createContext(null);
export function useScenes(){
   return( useContext(SceneCtx));
};

export function ScenesProvider({children}){

    const [scenes, setScenes] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);

useEffect(() => {

  async function getTopics(){

    try{
    const {data} = await api.get('/scenes/all');
   setScenes( data.data);
    console.log(data.data);
    setLoading(false);
    }catch(err){
        setErr(err.message);
    }
  }

getTopics();
}, [])

return(
    <SceneCtx.Provider value = {{scenes, err, loading}} >
        {children}
        </SceneCtx.Provider>
)
}