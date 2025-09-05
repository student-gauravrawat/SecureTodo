import React, {useState} from 'react'
import {Container, Button, Input} from "./index"
import {createAccount} from "../FireBase/auth"
import { useForm } from 'react-hook-form'
import {Login} from "./index"

function SingUp() {

const{register, handleSubmit, reset} = useForm()
const [showLogin, setShowLogin] = useState(false)


const singup = async(data)=>{
    try {
        await createAccount(data)
        console.log("sing up successful")
        reset()
        setTimeout(() => {
             alert("Account Created🥳🥳🥳")
         }, 0) 
          setShowLogin(true)

    } catch (error) {
       console.log("error is singup", error.message)
       reset()
    }
}
  return (
   <>
      {showLogin? (<Login/>) : (
        <div className='my-[50px]'>

         <div className="text-left ml-5.5">
              <p className='text-[70px] font-semibold'>Sing Up</p>
              <p className=' text-[30px] font-light'>Welcome, Please Sing Up to continue.</p>
         </div>


         <Container>
               <form onSubmit={handleSubmit(singup)}>
                    <div>
                        <Input 
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                          {
                            ...register("email",{
                              required:true
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
                            Sign Up
                        </Button>
                    </div>
               </form>
         </Container>    

    

    </div>

      )}
   </>
  )
}

export default SingUp
