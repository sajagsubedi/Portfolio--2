import React from 'react'
import '../App.css'
import Dropdown from "./Dropdown.jsx"
import { useAuth0 } from "@auth0/auth0-react";
import{ Link } from 'react-router-dom'

export default function 
    Header(props){
    let aClass=`mr-5 hover:text-violet-500 ${props.mode !=='bg-gray-300'?'text-white':'text-gray-900'}`;
        let themestyle={
        width:'30px',
        height:'30px'  
        }

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


return(
<div>
<header className={`text-gray-900 ${props.mode} body-font`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link to="/" className={`flex title-font font-medium items-center ${props.mode !== 'bg-gray-300'?'text-white':'text-gray-900'} mb-4 md:mb-0`}>
  <img width="50px" src="https://sajagsubedi.netlify.app/img/img.jpg" className="rounded-full"/>
  <span className="ml-3 text-xl ">Sajag Subedi</span>
  </Link>
  <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
<Link to="/" className={`${aClass}`}>Home</Link>
  <Link to="/blog" className={`${aClass}`}>Blog</Link>
  <Link to="/contact" className={`${aClass}`}>Contact</Link>
  </nav>
      {isAuthenticated?
          <button onClick={() => logout({ returnTo: window.location.origin })}
     className=" mx-2 bg-violet-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white hover:text-gray-600 text-base mt-4 md:mt-0">LogOut
    </button>:
      <button  onClick={() => loginWithRedirect()} className=" mx-2 bg-violet-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white hover:text-gray-600 text-base mt-4 md:mt-0">LogIn
    </button>}

 <Dropdown toggleMode={props.toggleMode} themestyle={themestyle} mode={props.mode}/>
  </div>
  </header>
  
</div>

)
      }