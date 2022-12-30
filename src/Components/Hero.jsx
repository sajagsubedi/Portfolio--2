import React from 'react'
import '../App.css'
import{ Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export default function Hero(props){
        const { user, isAuthenticated, isLoading } = useAuth0();

return(
<div>
    
    <section className={`${props.mode === 'bg-gray-900'?'text-white':'text-gray-900'} body-font`}>
        {isAuthenticated?
<div className={`${props.col} mx-auto w-1/2 px-2 py-2 flex items-center md:w-1/4 rounded my-5`}>
 <img className="w-10 mx-1 rounded-full"src={user.picture} alt={user.name} />
        <h2>Welcome <span className={`font-bold ${props.mode!=='bg-gray-900' && props.mode!=='bg-gray-300' ?`text-${props.colour}-700`:'text-violet-500'} `}> {user.name}</span></h2>
        
      </div>:''} 
 
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img className="object-cover object-center rounded-3xl" alt="hero" src="https://sajagsubedi.netlify.app/img/img.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${props.mode === 'bg-gray-900'?'text-white':'text-gray-900'}`}>Sajag Subedi
 </h1>
    <p className="mb-8 leading-relaxed">Hello,My name is Sajag Subedi.I am 14 years old. I am a student studying in Grade 8 at Shree Shitaladevi Community Seconadary School.I am a passinate Web developer. I can be your web developer. You can Hire me to design and develop your website using HTML,CSS,JS and React.</p>
    <div className="flex justify-center">
    <Link to="/pricing" className={`inline-flex text-white ${props.mode!=='bg-gray-900' && props.mode!=='bg-gray-300' ?props.mode:'bg-violet-600'} border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg`}>Hire Me</Link>
    <button className={`ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:${props.mode!=='bg-gray-900' && props.mode!=='bg-gray-300' ?props.mode:'bg-violet-600'} hover:text-white
 rounded text-lg`}>Explore More</button>
    </div>
  </div>
    </div>
    </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff"  fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,112C480,139,600,213,720,256C840,299,960,309,1080,293.3C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
)
}