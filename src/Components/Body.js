import React from 'react'
import { useSelector } from 'react-redux'
import Maincontent from './Maincontent'
import ExpandSidebar from './ExpandSidebar'
import Sidebar from './Sidebar'
const Body = () => {
  const toggle = useSelector((state)=>state.ToggleFunction.toggle)
  return (
    <div className='flex w-full flex-1 border-2 border-red-600 border-solid'>
     {toggle === true ? <ExpandSidebar /> : <Sidebar /> }
      <Maincontent />

    </div>
        
  )
}

export default Body