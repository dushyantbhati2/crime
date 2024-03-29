// import React from 'react'
// import { Link } from 'react-router-dom'

// const Msg = () => {
//   return (
//     <div className='mb-4 bg-slate-400 w-[500px] absolute top-28 '> 

//               <Link to="#" className="rounded-full ">
//               <div className='bg-black text-white'>some message</div>
//               </Link>
            
       
//     </div>
//   )
// }

// export default Msg

import React from 'react'
import { Link } from 'react-router-dom'

const Msg = () => {
  return (
    <div className='bg-[#ADC4CE]/10 mb-4 w-2/3 absolute top-28 shadow-lg rounded-lg p-6 divide-y divide-y-reverse divide-black/10'> 
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>New Updates</h2>
        <Link to="#" className="text-blue-500"></Link>
      </div>
      <div className=' rounded-lg p-4 mb-4'>
        <h3 className='font-bold'>Community Alert</h3>
        <p>on incident - 3600</p>
        <p>Stay safe, stay aware</p>
        <p>Action Response</p>
      </div>
      <div className=' rounded-lg p-4'>
        <h3 className='font-bold'>NGO Support Team</h3>
        <p>on incident - 3600</p>
        <p>Thank you for your contribution</p>
      </div>
    </div>
  )
}

export default Msg;

