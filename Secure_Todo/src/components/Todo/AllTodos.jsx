import React from 'react'
import { useSelector } from 'react-redux'

function AllTodos() {
const {user} = useSelector((state)=>state.auth)

  return (
    <div>
    hello
    
    </div>
  )
}

export default AllTodos
