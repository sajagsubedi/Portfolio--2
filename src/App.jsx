import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Hero from './Components/Hero.jsx';
import Blog from './Components/Blog.jsx';
import Contact from './Components/Contact.jsx';
import Pricing from './Components/Pricing.jsx';
import Skills from "./Components/Skills.jsx"

import React, { useState } from 'react';
import{ BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
    
const [mode, setMode] = useState('bg-gray-300')
    const [col, setCol] = useState('bg-gray-300')
    const [colour, setColour] = useState('gray')

        document.body.classList.add('bg-gray-100')   ;

    const removeclass=()=>{
        document.body.classList.remove('bg-blue-200')
        document.body.classList.remove('bg-green-200')
        document.body.classList.remove('bg-pink-200')
        document.body.classList.remove('bg-red-200')

    document.body.classList.remove('bg-purple-200')
        document.body.classList.remove('bg-yellow-200')
        document.body.classList.remove('bg-indigo-200')
        document.body.classList.remove('bg-gray-100')
                document.body.classList.remove('bg-gray-900')
                document.body.classList.remove('bg-fuchsia-200')

    
    }
const toggleMode = (color)=>{
    
    if(mode !== color){
        removeclass()
       if (color==='slate') {
           setMode(`bg-gray-900`);
     setCol(`bg-gray-800`)  
              setColour(`${color}`)  
document.body.classList.add('bg-gray-900')    ;    

       }
        else if(color==='gray'){
            setMode(`bg-gray-300`);
                 setCol(`bg-gray-300`)  
                          setColour(`${color}`)  

    document.body.classList.add('bg-gray-100')   ;

        }
        else{
      setMode(`bg-${color}-500`);
     setCol(`bg-${color}-300`) 
                          setColour(`${color}`)  

document.body.classList.add(`bg-${color}-200`)     ;   

    }
    }
    else{
      setMode('bg-gray-300');
        removeclass()
                      setColour(`${color}`)  

                  setCol(`bg-gray-300`);
    }
  }
  return (
    <BrowserRouter>
    <Header mode={mode} toggleMode={toggleMode} />
        <hr/>
        <Routes>
            <Route exact path="/Contact" element={<Contact mode={mode} colour={colour} col={col}/>}/>
          <Route exact path="/blog" element={<Blog  mode={mode} colour={colour} col={col}/>}/>
                      <Route exact path="/pricing" element={<Pricing  mode={mode}  colour={colour} col={col}/>}/>

              <Route exact path="/" element={<div>
                  <Hero colour={colour}  col={col} mode={mode} />
                  <Skills colour={colour} col={col} mode={mode}/>
         </div>}/>
        </Routes>
        <hr/>
     <Footer mode={mode}/>
    </BrowserRouter>
      
  )
          }