import React, { useState } from 'react'
import{Container, Button, Input} from "./index"
import SingUpPage from '../pages/SingUpPage'
import {useForm} from "react-hook-form"
import { login as storeLogin} from "../FireBase/auth"

import ProjectPage from '../pages/ProjectPage'

function Login() {


  const{register, handleSubmit}= useForm()
  const [showLogin, setShowLogin] = useState(false)
  
 const[active, setActive] = useState("")
 if(active === 'singupPage'){
  return <SingUpPage/>
 }

  const login = async(data)=>{
      try {
        const userData =  await storeLogin(data)
        console.log("login successful")
        setShowLogin(true)

      } catch (error) {
        console.log("error is login", error.message)
      }
  }

  return (
    <>
          { showLogin? (<ProjectPage/>) : (
     <div className='my-[50px]'>

         <div className="text-left ml-5.5">
              <p className='text-[70px] font-semibold'>Login</p>
              <p className=' text-[30px] font-light'>Welcome, Please login to continue.</p>
         </div>


         <Container>
               <form onSubmit={handleSubmit(login)}>
                    <div>
                        <Input 
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                          {
                            ...register("email", {
                              required: true
                            })
                          }
                        />
                        <Input
                           label="Password"
                           placeholder="Enter your password"
                           type="password"
                           {
                            ...register("password",{
                              required:true
                            })
                           }
                        />
                        <Button type="submit">
                            Login
                        </Button>
                    </div>
               </form>
         </Container>    

      <div className='text-left ml-5.5'>
          <div className=' text-[30px] mt-8'>
              Don't have an account?  
              <button onClick={()=> setActive("singupPage")}>
                  <span className=' hover:underline hover:text-blue-800 ml-1.5'>
                      Sign Up🔗
                  </span>
              </button>
          </div>
      </div>

    </div>
   )}
</>
   
  )
}

export default Login
