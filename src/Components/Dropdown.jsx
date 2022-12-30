import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left my-2">
      <div>
        <Menu.Button className={` inline-flex w-full justify-center rounded-md border border-${props.mode !=='bg-gray-300'?'white':'gray-900'} px-4 py-2 text-sm font-medium ${props.mode !=='bg-gray-300'?'text-white':'text-gray-900'} hover:text-white shadow-sm hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}>
          Select Theme
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
            <Menu.Items
                className="
absolute flex right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-violet-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
              
            <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-gray-800  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('slate')}} ></div>
              )}
            </Menu.Item>
              
            <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-white  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('gray')}} ></div>
              )}
            </Menu.Item>
              
               <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-blue-500  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('blue')}} ></div>
              )}
            </Menu.Item>

               <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-green-500  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('green')}} ></div>
              )}
            </Menu.Item>
              
      <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-pink-500 rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('pink')}} ></div>
              )}
            </Menu.Item>
              
      <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-red-500  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('red')}} ></div>
              )}
            </Menu.Item>
              
      <Menu.Item>
                  {({ active }) => (  <div  className=" inline-flex bg-purple-500  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('purple')}} ></div>
              )}
            </Menu.Item>
              
      <Menu.Item>  
                  {({ active }) => (  <div  className=" inline-flex bg-indigo-500 rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('indigo')}} ></div>
              )}
            </Menu.Item>
      <Menu.Item>
              
                  {({ active }) => (  <div  className=" inline-flex bg-fuchsia-500  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('fuchsia')}} ></div>
              )}
            </Menu.Item>
       <Menu.Item>
              
                  {({ active }) => (  <div  className=" inline-flex bg-yellow-500  rounded-3xl mx-2 my-3" style={props.themestyle} onClick={()=>{props.toggleMode('yellow')}} ></div>
              )}
            </Menu.Item>
     
     </div>
            </Menu.Items>
      </Transition> 
    </Menu>
  )
    }