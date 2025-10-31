import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'
import {
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom'

import Home from './Components/Pages/Home.jsx'
import { AuthLayout, Login, Signup } from './Components/index.js'
import EditPost from './Components/Pages/EditPost.jsx'
import Post from './Components/Pages/Post.jsx'
import AddPost from './Components/Pages/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication={true}>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: '/post/:slug',
        element: <Post />,
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication={true}>
            <EditPost />
          </AuthLayout>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>
  </StrictMode>
)
