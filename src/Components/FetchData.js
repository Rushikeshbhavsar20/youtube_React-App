import { GOOGLE_API_KEY } from "../utils/Constants";



const fetchdata =  async()=>{
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=10&key=${GOOGLE_API_KEY}`;
    const fetchdata = await fetch(url);
    const data = await fetchdata.json();  
    console.log(data,"from function");
    
    return data;
}

export default fetchdata;