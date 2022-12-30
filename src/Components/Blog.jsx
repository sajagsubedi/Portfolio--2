import React from 'react'
import '../App.css'
import BlogItems from "./BlogItem.jsx"

export default function Blog(props){
return(

<section className={` ${props.mode==='bg-gray-900'? 'text-gray-400':'text-gray-600'} body-font`}>
    <h1 className={`${props.mode !=='bg-gray-900' && props.mode !=='bg-gray-300'?`text-${props.colour}-600`:'text-indigo-500'} text-center text-5xl`}>Read my Blogs</h1>
      <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
  <BlogItems colour={props.colour} col={props.col} imgurl="https://source.unsplash.com/720x400/?HTML,Programming" tit="HTML" titcap="Building blocks of the webpage"desc="Html is the building block of a webpage.It was developed by Tim berners lee in 1990 AD.Html stands for Hyper Text Mark-up language.It determines the structure of the webpage...."
 />
            <BlogItems colour={props.colour} col={props.col} imgurl="https://source.unsplash.com/720x400/?CSS,HTML" tit="CSS" titcap="Beautiness of the webpage"desc="
 Css is a stylesheet language which is used to describe the look and formatting of a document written in markup language.It provides an additional feature to HTML.It is generally used with HTML to change the style of the web pages and user interfaces"/>
 
 <BlogItems  colour={props.colour} col={props.col} imgurl="https://source.unsplash.com/720x400/?Programming,coding,brain" tit="JavaScript" titcap="The brain of the webpage"desc="Javascript is a programming language used to add logic in the webpages.Programming is the way to communicate with computers.Javascript is based on Ecmascript.Ecmascript is the standard of Javascript.
 "/>
 <BlogItems  colour={props.colour} col={props.col} imgurl="https://source.unsplash.com/720x400/?coding, programming,RaectJs logo" tit="React Js" titcap="Library of JavaScript "desc="React Js is a popular library of JavaScript. It is used to make Single page application. The websites designed in React Js are unreloadable and faster in comparison of the websites made using HTML. The websites are divided into several components and the components can be reused in react js."/>
  </div>
          </div>
              </section>
              
              
            
)
}