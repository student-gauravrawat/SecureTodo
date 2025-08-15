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
                     <NavLink 
                        to='/instruction'
                        className={({isActive})=>`${isActive ? " text-[38px] font-bold":""} text-[34px] font-semibold mt-[-13px]`}
                        >
                        Secure Notes</NavLink>
                  </div>

                  <ul className=' flex items-center justify-center gap-8 '>
                     <div
                      className= '  font-medium  '
                     >
                         <li>
                              <NavLink
                              className={({isActive})=>` ${isActive?" text-xl text-red-500  border-b-5 rounded":""}`}
                               to='/alltodo'
                              >
                                   All Notes
                              </NavLink>
                         </li>
                     </div>

                     <div
                    
                       className= 'font-medium'   
                     >
                      <li>
                          <NavLink
                            className={({isActive})=>` ${isActive?" text-xl text-red-500  border-b-5 rounded":""}`}
                            to='/completedtodo'
                          >Completed Notes
                          </NavLink>
                      </li>
                     </div>

                     <div
                      
                       className='font-medium'  
                    >
                         <li>
                              <NavLink
                               className={({isActive})=>` ${isActive?" text-xl text-red-500  border-b-5 rounded":""}`}
                               to='/uncompletedtodo'
                              >
                                    Uncompleted Notes
                              </NavLink>
                         </li>
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
