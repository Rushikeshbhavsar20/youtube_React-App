import React, { useEffect, useState } from 'react'
import fetchdata from './FetchData'
const Cards = () => {
    const[data ,setdata] = useState(null);

    useEffect(()=>{
         const fetchdataAsync = async()=>{
            const results = await fetchdata();
            setdata(results);
         }
         fetchdataAsync();
    },[])
   
 
    console.log(data);
    
    
    
  return (
    <div className='p-[20px]'>
      <div className='w-[352px] h-[182px] border-2 border-black border-solid'>
      </div>
      <div className='w-[352px] h-[99px] p-2 gap-2 overflow-hidden flex border-green-700 border-2 border-solid'>
       <div >
       <img  className='w-[40px] mr-[30px] h-[40px] object-cover  rounded-full'  src={"https://images.unsplash.com/photo-1494253109108-2e30c049369b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"} />
      </div>
      <div className='flex-col'>
           <p>JEhthalal UIBEPV UVBSUIERBVB bif aeb dsupeb fIBSEDBGJIVBS</p>
           <div className='flex'>
           <p>TAeiuefbi fbefhe fbisdas </p>
           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
           </div>
           <p>hsadasdiopasd</p> <span>.</span> <p>dfsdhfbsudfdfshdbfsdfb</p>
        </div>
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
      </div>
      </div>
       
    </div>
  )
}

export default Cards