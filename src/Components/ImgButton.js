import React from 'react'

const ImgButton = ({svg , name}) => {
  return (
    <div className=' w-full h-[40px] items-center rounded-md flex hover:bg-[#f2f2f2] '>

       <div className='flex justify-start pl-4'>{svg}</div>
      <div className='pl-4 font-semibold text-[14px]' > <p>{name}</p></div>

    </div>

  )
}

export default ImgButton