import React from 'react'
import {Container, Button, Input} from "./index"

function SingUp() {
  return (
     <div className='my-[50px]'>

         <div className="text-left ml-5.5">
              <p className='text-[70px] font-semibold'>Sing Up</p>
              <p className=' text-[30px] font-light'>Welcome, Please Sing Up to continue.</p>
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
                            Sing Up
                        </Button>
                    </div>
               </form>
         </Container>    

    

    </div>
  )
}

export default SingUp
