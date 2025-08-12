import React from 'react'
// import {useNavigate} from "react-router-dom"
import LogOutBtn from './LogOutBtn'
import { Link, NavLink } from 'react-router-dom'

function Header() {
 
  // const navigate = useNavigate()

  //  const navItems = [
  //   { name: 'Home', slug: "/"},
  //   { name: "Completed Todos", slug: "/completed" },
  //   { name: "Uncompleted Todos", slug: "/uncompleted" },
  // ]


  return (
    <header>
        <nav>
             <div>
                  <Link to='/'>
                       <p>Secure ToDo</p>
                  </Link>

                  <ul>
                     <NavLink
                      to='/'
                      className={({isActive})=> isActive? "text-2xl text-red-400 font-bold": ""}
                     >
                         <li>All Todo</li>
                     </NavLink>

                     <NavLink
                       to='/completetodo'
                       className={({isActive})=> isActive ? "text-2xl text-red-400 font-bold":""}
                     >
                      <li>Completed Todo</li>
                     </NavLink>

                     <NavLink
                       to='/uncompletetodo'
                       className={({isActive})=>isActive ? "text-2xl text-red-400 font-bold":""} 
                    >
                         <li>Uncompleted Todo</li>
                     </NavLink>
                  </ul>


                  <LogOutBtn>
                       Log Out
                  </LogOutBtn>
             </div>
        </nav>
    </header>
  )
}

export default Header
