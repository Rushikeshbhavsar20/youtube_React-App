import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toggleit } from '../utils/toggleSlice';

const Header = () => {   
    const dispatch = useDispatch();
    const handleClick = ()=>{
          dispatch(Toggleit())
    }

  return (
    <div className='flex w-full h-[70px]  pl-[20px] pt-[0px]  content-center items-center justify-between'>
      <img  onClick={handleClick} className="h-[24px]  "   src="https://www.clipartmax.com/png/middle/333-3335189_menu-three-horizontal-lines-symbol-free-icon-logos-with-horizontal-lines.png" />
      <img className=' ml-[15px] w-[140px] object-cover h-[30px]' src={"https://as2.ftcdn.net/v2/jpg/04/76/41/47/1000_F_476414785_Qsbkvlr4AK0lvuKjSDlb7lfOY5oqwimn.jpg"} />
      <div className='flex w-full content-center items-center  justify-center pr-[30px]'>
          <input  type='text' className=' w-6/12 h-[35px] border-2 rounded-tl-full rounded-bl-full border-[#e4e4e4] border-solid'   />
          <div className='w-[50px] h-[35px] bg-[#e4e4e4] rounded-tr-full rounded-br-full '> 
                <svg className='pt-2' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="45"><path d="m16.9994165 16.2923098 3.8541369 3.8541368c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0l-3.8541368-3.8541369c-1.4103486 1.2450743-3.2630999 2.0005835-5.2923098 2.0005835-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8c0 2.0292099-.7555092 3.8819612-2.0005835 5.2923098zm-5.9994165 1.7076902c3.8659932 0 7-3.1340068 7-7 0-3.86599325-3.1340068-7-7-7-3.86599325 0-7 3.13400675-7 7 0 3.8659932 3.13400675 7 7 7z"/></svg>
          </div>
          <img className='ml-[24px] w-[35px] h-[35px] p-[4px] rounded-full bg-[#e4e4e4]' src={"https://cdn.iconscout.com/icon/free/png-512/free-mic-icon-download-in-svg-png-gif-file-formats--speaker-record-voice-audio-google-material-vol-3-pack-user-interface-icons-32067.png?f=webp&w=512"} />
      </div>
      <img  className='w-[40px] mr-[30px] h-[40px] object-cover  rounded-full'  src={"https://images.unsplash.com/photo-1494253109108-2e30c049369b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"} />
    
    </div>
  )
}

export default Header