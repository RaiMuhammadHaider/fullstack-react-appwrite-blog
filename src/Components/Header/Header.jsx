// import React from 'react'
// // import {Container ,Logo,LogoutBtn } from '../index'
// import {Logo, Container ,LogoutBtn} from '../index'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   const authStatus = useSelector((state) => state.auth.status); 
  
//   const navigate = useNavigate(); 
//   const navItem =[
//      {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//    {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]
  
//   return (
//     <div>
//      <header className='py-4 shadow bg-gray-500 '>
//       <Container>
//          <nav className='flex'>
//             <div className='mr-4 '>
//               <Link to='/'>
//               <Logo width='70px' />
//               </Link>
//               <ul className='flex ml-auto'>
//                   {navItem.map((item)=>
//                 item.active? (
//                   <li key={item.name}><button
//                   onClick={()=>navigate(item.slug)}
//                   className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full '
//                   >{item.name}</button></li>
//                 ) : null ) 
//               }
//               {
//                 authStatus && (
//                   <li>
//                   <LogoutBtn/>
//                   </li>
//                 )
//               }
//               </ul>

//             </div>
//          </nav>

//       </Container>

//      </header>
//     </div>
//   )
// }
// export default Header
import React from "react";
import { Logo, Container, LogoutBtn } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItem = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="70px" />
          </Link>

          {/* Nav Items */}
          <ul className="flex items-center space-x-4 ml-auto">
            {navItem.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-5 py-2 rounded-full text-white font-medium transition duration-200 bg-white/20 hover:bg-white/30 backdrop-blur-md"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
