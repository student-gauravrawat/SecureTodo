import React, { useState } from 'react'
import{Container, Button, Input} from "./index"
import SingUpPage from '../pages/SingUpPage'
import {useForm} from "react-hook-form"
import { login as storeLogin, getCurrentUser} from "../FireBase/auth"
import { useDispatch } from "react-redux";
import { setUser } from "../store/todoSlice";
import ProjectPage from '../pages/ProjectPage'


function Login() {
 const dispatch = useDispatch()

  const{register, handleSubmit, reset}= useForm()
  const [showPage, setShowPage] = useState(false)
  const[error, setError] = useState(false)
  const[active, setActive] = useState("")

  if(active === 'singupPage'){
         return <SingUpPage/>
    }
  

  const login = async(data)=>{
      try {
        await storeLogin(data)
        console.log("login successful")
        const currentUser = await getCurrentUser(); // Firebase से user object
        const userData = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || "",
        photoURL: currentUser.photoURL || ""
      };
        dispatch(setUser(userData)); // Redux में user set
        localStorage.setItem("user", JSON.stringify(userData));
        setShowPage(true)
        
      } catch (error) {
        console.log("error is login", error.message)
        setError(true)
        reset()
      }
  }

  return (
    <>
          { showPage? (<ProjectPage/>) : (
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
                        <div className=' flex'>
                           <Button type="submit">
                            Login
                           </Button>
                           {error? <p className=' text-red-700 font-mono  text-s ml-[150px] '>Please enter your right email and password</p>:""}
                        </div>
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
