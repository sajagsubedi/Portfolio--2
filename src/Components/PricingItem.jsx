import '../App.css'

export default function PricingItem(props) {
    let txtcol=props.bg === 'bg-gray-800'?'text-white':'text-gray-900'
    return(  
 <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
 <div className={`h-full p-6 rounded-lg border-2 border-${props.bordercolor} ${props.bg} flex flex-col relative overflow-hidden`}>
     {props.popular? <span className={`bg-${props.bordercolor} text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}>POPULAR</span>:''}
 <h2 className={`text-sm tracking-widest title-font mb-1 ${txtcol} font-medium`}>Pro</h2>
 <h1 className={`text-5xl ${txtcol} pb-4 mb-4 border-b border-gray-200 leading-none`}>{props.price}</h1>
 <p className={`flex items-center 
${txtcol}  mb-2`}>
 <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
 <svg className= {` bg-${props.bordercolor} border-none rounded-full w-3 h-3`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
 <path d="M20 6L9 17l-6-5"></path>
 </svg>
 </span>{props.language}
 </p>
 <p className={`flex items-center ${txtcol} mb-2`}>
 <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
 <svg className={` bg-${props.bordercolor} w-3 h-3 rounded-full`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"  viewBox="0 0 24 24">
 <path d="M20 6L9 17l-5-5"></path>
 </svg>
 </span>{props.pages}
 </p>
 <p className={`flex items-center ${txtcol} mb-6`}>
 <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
 <svg className={` bg-${props.bordercolor} w-3 h-3  rounded-full`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"  viewBox="0 0 24 24">
 <path d="M20 6L9 17l-5-5"></path>
 </svg>
 </span>{props.rights}
 </p>
 <button className={`flex items-center mt-auto text-white bg-${props.bordercolor} border-0 py-2 px-4 w-full focus:outline-none hover:bg-${props.bordercolor} rounded`}>Pay
 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
 <path d="M5 12h14M12 5l7 7-7 7"></path>
 </svg>
 </button>
 <p className={`text-xs ${txtcol} mt-3`}>Literally you probably haven't heard of them jean shorts.</p>
 </div>
 </div>
 
     )
}
