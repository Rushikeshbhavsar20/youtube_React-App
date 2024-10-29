import React from 'react'
import Sidebar from './Sidebar'
import Maincontent from './Maincontent'

const Body = () => {
  return (
    <div className='flex w-full flex-1 border-2 border-red-600 border-solid'>
      <Sidebar />
      <Maincontent />

    </div>
        
  )
}

export default Body