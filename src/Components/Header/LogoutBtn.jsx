import React from 'react'
// import conf from '../../conf/conf'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
   <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full' onClick={logoutHandler}>logout</button>
  )
}

export default LogoutBtn
