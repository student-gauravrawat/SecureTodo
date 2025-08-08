import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Login, SingUp} from "../components/index"

function Started() {
    const[activePage, setActivePage] = useState("start")

      if(activePage === "login"){
         return <Login/>
      }
      else if(activePage === "singup"){
         return <SingUp/>
      }
    
  return (
      <div className='my-[60px]'>
            <div className='text-left ml-5.5 '>
                <p className='text-[70px] font-semibold'>Get Started</p>
                <p className=' text-[30px] font-light'>Welcome to our platform.</p>
                <p className=' text-[30px] font-light'>Login or sign up to get started on your journey.</p>
             </div>

             <div className='flex flex-col  items-center gap-9 my-[80px]'>
                <button 
                className=" bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 w-[345px] h-[50px]"
                onClick={()=> setActivePage('login')}
                >     Login
                </button>
                <button 
                   className=" bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 w-[345px] h-[50px]"
                onClick={()=> setActivePage('singup')}
                >     Sing up
                </button>
             </div>

         <div className="flex gap-6 mt-7 text-gray-700 ml-5.5 p-1">
               <div>
                     <h3 className="font-semibold text-lg">🚀 Fast Access</h3>
                     <p className="text-sm">Quick login and secure signup process.</p>
               </div>
               <div>
                     <h3 className="font-semibold text-lg">🔒 Secure</h3>
                     <p className="text-sm">Your data is protected with us.</p>
               </div>
               <div>
                      <h3 className="font-semibold text-lg">📱 Easy to Use</h3>
                      <p className="text-sm">Optimized for all devices.</p>
               </div>
          </div>
  
          
      </div>
  )
}

export default Started
