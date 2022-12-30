import '../App.css'
import PricingItem from "./PricingItem.jsx"

export default function Pricing(props) {
    return(
        <section className="text-gray-600 body-font overflow-hidden">
 <div className="container px-5 py-24 mx-auto">
 <div className="flex flex-col text-center w-full mb-20">
 <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-2 ${props.mode !== 'bg-gray-900' && props.mode !== 'bg-gray-300'?`text-${props.colour}-600`:'text-indigo-600'}`}>MyPricing's</h1>
  
     </div>
 <div className="flex flex-wrap -m-4">

<PricingItem bg={props.col} bordercolor= "gray-600" price="15$" language="Bootstrap or Tailwind Css" pages="Multipage" rights="All rights"  popular={false}/>

      
<PricingItem bg={props.col} bordercolor={`${props.mode !== 'bg-gray-900' && props.mode!== 'bg-gray-300'?`${props.colour}-500`:'violet-500'}`} price="25$" language="HTML,CSS and JavaScript" pages="Multipage" rights="All rights"  popular={true}/>
     <PricingItem bg={props.col} bordercolor= "gray-500" price="35$" language="React" pages="Multipage" rights="All rights"  popular={false}/>
</div>
     </div>
            </section>
        
)
}
