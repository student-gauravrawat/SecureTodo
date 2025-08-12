import React from 'react'
import LogOutBtn from './LogOutBtn'
import { Link, NavLink } from 'react-router-dom'

function Header() {
 

  return (
    <header>
        <nav className=' my-10'>
             <div className='  flex justify-between '>
                  <Link to='/'
                   className=' ml-5' 
                  >
                       <p className='text-[34px] font-semibold'>Secure ToDo</p>
                  </Link>

                  <ul className=' flex items-center justify-center gap-8 '>
                     <NavLink
                      to='/'
                      className={({isActive})=> `  font-medium  ${isActive? "text-xl text-red-400 font-bold  ": ""}`}
                     >
                         <li>All Todo</li>
                     </NavLink>

                     <NavLink
                       to='/completetodo'
                       className={({isActive})=> ` font-medium  ${isActive? "text-xl text-red-400 font-bold": ""}`}
                     >
                      <li>Completed Todo</li>
                     </NavLink>

                     <NavLink
                       to='/uncompletetodo'
                       className={({isActive})=> `  font-medium  ${isActive? "text-xl text-red-400 font-bold": ""}`} 
                    >
                         <li>Uncompleted Todo</li>
                     </NavLink>
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
