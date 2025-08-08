import React, { useState } from 'react'
import{Container, Button, Input, SingUp} from "./index"

function Login() {

 const[active, setActive] = useState("start")
 if(active === 'singup'){
  return <SingUp/>
 }

  return (
    <div className='my-[50px]'>

         <div className="text-left ml-5.5">
              <p className='text-[70px] font-semibold'>Login</p>
              <p className=' text-[30px] font-light'>Welcome, Please login to continue.</p>
         </div>


         <Container>
               <form>
                    <div>
                        <Input 
                          label="Email"
                          placeholder="Enter your email"
                          type="text"
                        />
                        <Input
                           label="Password"
                           placeholder="Enter your password"
                           type="password"
                        />
                        <Button>
                            Login
                        </Button>
                    </div>
               </form>
         </Container>    

      <div className='text-left ml-5.5'>
          <div className=' text-[30px] mt-8'>
              Don't have an account?  
              <button onClick={()=> setActive("singup")}>
                  <span className=' hover:underline hover:text-blue-800 ml-1.5'>
                      Sign Up🔗
                  </span>
              </button>
          </div>
      </div>

    </div>
  )
}

export default Login
