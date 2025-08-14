import React from 'react'
import LogOutBtn from './LogOutBtn'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
 const user = useSelector((state)=> state.auth.user)

  return (
    <header>
     <div className=' font-bold text-xl  flex justify-end mt-2 mr-4 '>Email: <span className='text-cyan-500  ml-1'> {user.email}</span></div>
        <nav className=' my-6 '>
             <div className='  flex justify-between '>
                  <div
                   className=' ml-5' 
                  >
                       <p className='text-[34px] font-semibold mt-[-13px]'>Secure Notes</p>
                  </div>

                  <ul className=' flex items-center justify-center gap-8 '>
                     <div
                      className= '  font-medium  '
                     >
                         <li>All Notes</li>
                     </div>

                     <div
                    
                       className= 'font-medium'   
                     >
                      <li>Completed Notes</li>
                     </div>

                     <div
                      
                       className='font-medium'  
                    >
                         <li>Uncompleted Notes</li>
                     </div>
                  </ul>

                 
                  <LogOutBtn  className=' mr-5 mt-[-3px]'>
                       Log Out
                  </LogOutBtn>
             </div>
        </nav>
    </header>
  )
}

export default Header
