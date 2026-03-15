import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState('') 

  const submitHandler = (e)=>{
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10 color' src="https://cdn-icons-png.flaticon.com/128/346/346945.png" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email ?</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            required
            placeholder='example@mail.com'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
          <h3 className='text-xl mb-2 font-medium'>What's your password ?</h3>
          <input
          value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            required
            placeholder='***********'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
          <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>Join a fleet ! <Link to="/captain-signup" className='text-blue-600'>Register as Captain</Link></p>
        </form>
      </div>
      <div>
        <Link to="/user-login" className='bg-[#10b461] flex item-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin

