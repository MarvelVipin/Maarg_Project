// import React,{useContext} from 'react'
// import { UserDataContext } from '../context/UserContext'
// import {useNavigate} from 'react-router-dom'

// const UserProtectWrapper = ({children}) => {
//     const token = localStorage.getItem('token')

//     const navigate = useNavigate()

//     console.log(token)


//     if(!token){
//         navigate('/user-login')
//     }
//   return (
//     <>
//     {children}
//     </>
//   )
// }

// export default UserProtectWrapper


import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/user-login')
        }
    }, [token, navigate])

    if (!token) {
        return null; 
    }

    return <>{children}</>
}

export default UserProtectWrapper
