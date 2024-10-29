import { useState } from "react";
import { GOOGLE_API_KEY } from "./Constants";
import { useEffect } from "react";


const Fetchdata = ()=>{
    const[viddetail,setviddetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(()=>{
         fetchviddata();
    },[])
   
   const fetchviddata = async() => {
    try{
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
    const fetchdata = await fetch(url);
    const data = await fetchdata.json();  
    console.log(data,"from function");
    setviddetail(data);
   }catch(err){
    setError(err);
    console.log("error occured"); 
     }finally{
     setLoading(false);
  }

 }
   return{viddetail,error,loading};
}

export default Fetchdata;