export default function SkillItems(props) {
    return(
        
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-slate-100 p-8 text-xl rounded list-none">
          <h1 className={`${props.mode !== 'bg-gray-300' && props.mode !==' bg-gray-900' ? `text-${props.colour}-600`:'text-violet-600'} font-bold text-3xl` }>{props.contenttitle}</h1>
            <li>{props.category1}</li>
            <li>{props.category2}</li>
            <li>{props.category3}</li>
        </div>
      </div>
        )
}