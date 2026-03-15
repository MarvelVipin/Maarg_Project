import React, { useState, createContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'




const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()
  const { user, setUser } = React.useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10 color' src="https://cdn-icons-png.flaticon.com/128/346/346945.png" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-lg font-medium mb-2'>What's your Name ?</h3>
            <div className='flex gap-4 mb-5'>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                required
                placeholder='First Name'
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base' />

              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                type="text"
                required
                placeholder='Last Name'
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email ?</h3>
            <input
              type="email"
              required
              placeholder='example@mail.com'
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <h3 className='text-xl mb-2 font-medium'>What's your password ?</h3>
            <input
              type="password"
              required
              placeholder='***********'
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <button className='bg-blue-600 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Account</button>
            <p className='text-center'>Already have an account !<Link to="/user-login
          " className='text-blue-600'>Login here</Link></p>
          </form>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>By proceeding, you agree and consent to receive communications from Voyage,
            including calls, WhatsApp messages, and SMS, for account-related updates, service notifications,
            and promotional purposes.</p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
