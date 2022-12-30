import React from 'react'
import '../App.css'
import { useAuth0 } from "@auth0/auth0-react";


export default function Contact(props){
    
    const { user, isAuthenticated, isLoading } = useAuth0();  

    let inputmode=props.mode == 'bg-gray-900'?'bg-gray-800 bg-opacity-40 border-gray-700 focus:bg-gray-900 ring-indigo-900 text-gray-100':`bg-gray-100 bg-opacity-50 border-gray-500 focus:border-${props.mode !=='bg-gray-300'?`${props.colour}`:`violet`}-500 
    focus:ring-${props.mode !=='bg-gray-300'?`${props.colour}`:`violet`}-400 focus:bg-white ring-indigo-200 text-gray-700`
return(
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${props.mode !== 'bg-gray-900' && props.mode !== 'bg-gray-300'?`text-${props.colour}-500`:'text-indigo-500'}`}>Contact Me</h1>
      <p className={`lg:w-2/3 mx-auto leading-relaxed text-base ${props.mode === 'bg-gray-900'?'text-white':'text-gray-900'}`}>You can Contact me to develop your website by filling the form below</p>
    </div>
      <form name="contact" method="POST" data-netlify="true" class="input-group">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
          
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className={`leading-7 text-sm ${props.mode === 'bg-gray-900'?'text-white':'text-gray-900'}`}>Name</label>
        <input type="text" id="name" name="name" value={isAuthenticated?`${user.name} `:''} className={`${inputmode} w-full  rounded  border focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
        
          <div className="relative">
              
            <label htmlFor="email" className={`leading-7 text-sm ${props.mode === 'bg-gray-900'?'text-white':'text-gray-900'}`}>Email</label>
            <input type="email" id="email" name="email" value={isAuthenticated?`${user.email} `:''} className={`${inputmode} w-full  border rounded  focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
         
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className={`leading-7 text-sm ${props.mode === 'bg-gray-900'?'text-white':'text-gray-900'}`}>Message</label>
            <textarea id="message" name="message" className={`${inputmode} w-full  rounded   focus:ring-2 text-base border outline-none py-1 px-3 leading-6 resize-none transition-colors duration-200 h-32 ease-in-out`}>
         </textarea>
          </div>
        </div>
             
<div className="p-2 w-full">
          <button type="submit" className={`flex mx-auto text-white ${props.mode!=='bg-gray-900' && props.mode!=='bg-gray-300' ?props.mode:'bg-violet-500'}  border-0 py-2 px-8 focus:outline-none hover:text-gray-500 rounded text-lg`}>Send Message</button>
        </div>
        
        <div className={`p-2 w-full pt-8 mt-8 border-t ${props.mode === 'bg-gray-900'?'border-gray-800':'border-gray-900'} text-center`}>
          <a className={`${props.mode!=='bg-gray-900' && props.mode!=='bg-gray-300' ?`text-${props.colour}-500`:'text-violet-700'} `}>sajagsubedi03@gmail.com</a>
          <p className="leading-normal my-5">Pragati tole
            <br/>Pokhara-11,Phoolbari
          </p>
          
        </div>
          
      </div>
        </div>
          </form>
    </div>
      
</section>
              
)
}