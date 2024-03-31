import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex w-full gap-8 justify-center items-center'>
     <div className="logo font-bold text-[15px] ">
          <span className='text-green-600 '>&lt;</span>
          
          Pass
          <span className='text-green-600'>UP/&gt;</span>
         
          </div>
     <div className='text-[13px]'>
          &copy;<i>Google Password Manager</i> 2024
     </div>
    </div>
  )
}

export default Footer