import React from 'react'
import LogOutBtn from './LogOutBtn'
import { Link, NavLink } from 'react-router-dom'

function Header() {
 

  return (
    <header>
        <nav className=' my-10'>
             <div className='  flex justify-between '>
                  <div
                   className=' ml-5' 
                  >
                       <p className='text-[34px] font-semibold'>Secure Notes</p>
                  </div>

                  <ul className=' flex items-center justify-center gap-8 '>
                     <div
                      className= '  font-medium  '
                     >
                         <li>All Todo</li>
                     </div>

                     <div
                    
                       className= 'font-medium'   
                     >
                      <li>Completed Todo</li>
                     </div>

                     <div
                      
                       className='font-medium'  
                    >
                         <li>Uncompleted Todo</li>
                     </div>
                  </ul>

                 
                  <LogOutBtn  className=' mr-5'>
                       Log Out
                  </LogOutBtn>
             </div>
        </nav>
    </header>
  )
}

export default Header
