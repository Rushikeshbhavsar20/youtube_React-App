import React from 'react'
import Header from './Header'
import Body from './Body'
const Applayout = () => {
  return (
    <div className='flex flex-col w-full min-h-screen overflow-visible border-2 border-red-600 border-solid' >
            <Header />
             <Body />
    </div>

  )
}

export default Applayout