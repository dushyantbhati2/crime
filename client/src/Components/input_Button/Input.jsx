import React from 'react'

const Input = ({type,id,name,placeholder,htmlFor,onChange,icon, changeVisibility}) => {
  return (
    <div className=" mb-4">
            <label
              htmlFor={htmlFor}
              className="block    mb-2"
            >
             {name}
            </label>
            <div className=' flex items-center relative'>
            <input
              onChange={onChange}
              type={type}
              id={id}
              className=" rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none  focus:border-slate-900"
              placeholder={placeholder}
              required
            />
            <span onClick={changeVisibility} className='absolute top-3 right-4 text-xl  flex items-center'>{icon}</span>
          
            </div>
            
          </div>
  )
}

export default Input
