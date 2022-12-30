import React from 'react'
import '../App.css'

export default function Footer(props){
return(
<div>

    <footer  className={`text-gray-400 ${props.mode !=='bg-gray-300'?'bg-gray-900':'bg-gray-300'} body-font`}>
  <div  className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <a  className="flex title-font font-medium items-center md:justify-start justify-center text-white">
  <img  width="50px" src="https://sajagsubedi.netlify.app/img/img.jpg"  className="rounded-3xl"/>
  <span  className={`ml-3 text-xl ${props.mode !== 'bg-gray-300'?'text-white':'text-gray-900'}`}>Sajag Subedi</span>
  </a>
  <p  className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"> &copy; 2022 sajagsubedi—
  <a href="mailto:sajagsubedi03@gmail.com"  className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">sajagsubedi03@gmail.com</a>
  </p>
  </div>
    </footer>
    </div>
)
}
