import React from 'react'
import { Header} from './index'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Home
