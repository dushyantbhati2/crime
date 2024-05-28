import React from 'react'
import SidebarHistory from '../../Components/gpt/SidebarHistory'

const ChatGpt = () => {
  return (
    <div className='font-Poppins w-full h-screen bg-[#F1FFFA] flex justify-end '>
      
      <SidebarHistory/>
      
      <div className='w-full sm:w-[calc(100vw-18rem)] mr-0 h-screen flex justify-center items-end relative'>
        <div className='fixed sm:w-11/12 bottom-12 flex align-itme center justify-center'>
        <input type='text' placeholder='Type your message' class='w-1/2 rounded-xl h-12 border border-none p-5 shadow-lg shadow-[#96E6B3] '/>
        </div>
      </div>
    </div>
  )
}

export default ChatGpt
