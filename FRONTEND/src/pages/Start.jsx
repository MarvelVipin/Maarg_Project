import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/736x/47/03/99/47039917d405bf0206dc8bdeb1db35e2.jpg)] h-screen pt-5  w-full bg-red-400 flex justify-between flex-col'>
        <img className='w-16 ml-8 invert' src="https://cdn-icons-png.flaticon.com/128/346/346945.png"/>
        <div className='bg-gray-350 py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold text-white'>Get started with Maarg</h2>
            <Link to="/user-login" className='flex items-center justify-center w-full bg-white text-black py-3 rounded mt-5 font-bold'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
