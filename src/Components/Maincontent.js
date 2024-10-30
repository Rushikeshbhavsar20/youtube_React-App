import React from 'react'
import Carousel from './Carousel-w'
import Cards from './Card'
import FetchData from '../utils/FetchData'


const Maincontent = () => {
  const{viddetail,error,loading} = FetchData();

  if(loading) return(<p>Loading...............</p>);
  if(error) return <p>{error}</p>
  const {items} = viddetail;
  return (
    <div className='flex  w-[96%] h-flex flex-col  border-2 border-blue-600 border-solid'>
       <Carousel />
    <div className='flex flex-wrap  gap-1'>
     {items.map((item)=>{
          return <Cards  itemDetails={item}/> 
      })}
   </div>
    </div>
  )
}

export default Maincontent