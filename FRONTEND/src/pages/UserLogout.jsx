import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const handleLogout = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (response.status === 200) {
                localStorage.removeItem('token')
                navigate('/user-login')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='p-7'>
            <button
                onClick={handleLogout}
                className='bg-red-500 text-white px-4 py-2 rounded'
            >
                Logout
            </button>
        </div>
    )
}

export default UserLogout

