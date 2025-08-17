import { useContext, createContext, useEffect, useState } from "react";
import api from '../lib/api.js'


const TopicCtx = createContext(null);
export function useTopics(){
   return( useContext(TopicCtx));
};

export function TopicsProvider({children}){

    const [topics, setTopics] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);

useEffect(() => {

  async function getTopics(){

      try{
      const {data} = await api.get('/gettopics');
 setTopics( data.data);
  console.log(data.data);
  setLoading(false);
  }catch(err){
      setErr(err.message);
  }
}

getTopics();
}, [])

return(
    <TopicCtx.Provider value = {{topics, err, loading}} >
        {children}
        </TopicCtx.Provider>
)
}