import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice'
import './App.css'
import { Footer, Header } from './Components'
import { Routes, Route, Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.log('Error getting current user:', error)
        dispatch(logout())
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])

  return !loading?
  ( <div className='min-h-screen    bg-gray-400'>
    <Header />
     <main >
      <Outlet />
     </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <h1 className="text-2xl font-bold">Loading...</h1>
    </div>
  )

}

export default App
