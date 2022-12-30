import SkillItems from "./SkillItems.jsx"

export default function Skills(props){
    return(
        
          <section className="text-gray-600 bg-white ">
  <div className="container px-6 py-24 mx-auto">
    <h1 className={`text-4xl font-extrabold title-font ${props.mode !== 'bg-gray-300' && props.mode !==' bg-gray-900' ? `text-${props.colour}-600`:'text-violet-600'} mb-12 text-center`}>My Skills</h1>
    <div className="flex flex-wrap -m-4">
      <SkillItems col={props.col} colour={props.colour} mode={props.mode} contenttitle="Web development" category1="HTML,CSS & JavaScript" category2="React Js" category3="Node Js & MongoDB"/>
 <SkillItems col={props.col} colour={props.colour} mode={props.mode} contenttitle="Graphics Design" category1="Brand Identity and Logo Design. " category2="Packaging Design." category3="Web and Mobile Design."/>
 <SkillItems col={props.col} colour={props.colour} mode={props.mode} contenttitle="Video Editing" category1="Linear Editing." category2="Simple Cutting." category3="Non-linear video editing."/>
 <SkillItems col={props.col} colour={props.colour} mode={props.mode} contenttitle="Linux " category1="Linux commands" category2="chmod" category3="Vim"/>
 
    </div>
  </div>
</section>
        
        )
}