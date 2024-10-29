import React, { useEffect, useState } from 'react'
import { CountFormat } from '../utils/Constants'
import { formatTimeAgo } from '../utils/Constants' 
const Cards = ({itemDetails}) => {
   
   const{channelTitle} = itemDetails?.snippet
   const{title} = itemDetails?.snippet?.localized
   const{url} =itemDetails?.snippet?.thumbnails?.high
   const{viewCount} = itemDetails?.statistics
   const{publishedAt} =itemDetails?.snippet
   const Views = CountFormat(viewCount)
   const Publishedago =  formatTimeAgo(publishedAt)
   
  //w-[352px] h-[182px]
  //w-[352px] h-[99px] 
  //'w-[48px]  h-[48px]
 //<div className='w-[310px] h-[43]'>
 //text-16px font-bold text-base text-start
  return (
    <div className='p-[20px]'>
      <div className='w-[352px] h-[182px]'> <img className='w-full h-full object-cover rounded-xl' alt='thumbnail' src={url} /> </div>
      <div className='w-[352px] h-[99px] gap-3 flex pt-[10px]'>
        <div className='w-[35px] flex shrink-0 '><img className='w-[35px]  h-[35px] rounded-full object-cover ' alt='thumbnail' src={url} /></div>
        <div className='w-[330px] h-[99px]'> <p className='font-semibold line-clamp-2  text-[16px]'>{title}</p> 
          <div className='w-[150] h-[20] flex gap-1 content-center items-center'> <p className='text-[14px] text-[#919191]'>{channelTitle}</p> <svg className='mt-[3px] text-[#919191]' xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 24 24" width="13" focusable="false" aria-hidden="true" ><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg> </div>
          <div className='w-[310] h-[20px] flex gap-2 items-center content-center'> <p className='text-[14px] text-[#919191]'>{Views} Views</p> <div className='h-[4px] w-[4px] flex shrink-0 bg-[#919191] rounded-full' ></div> <p className='text-[14px] text-[#919191] '>{Publishedago}</p>        </div>
        </div>
        <div className='w-[40] flex shrink-0'><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg></div>
      </div>
      <div></div>
  
 
    </div>
  )
}

export default Cards