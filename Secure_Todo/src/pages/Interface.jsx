import React, { useState } from 'react'
import WelcomeIn from './WelcomeIn'
import Started from './Started'

function Interface() {
    const[enterInside, setEnterInside] = useState(false)

     const toggle = ()=>{
        setEnterInside((prev)=> !prev)
        console.log("click")
     }
  return (
    <>
        {enterInside ? <Started/> : <WelcomeIn toggle={toggle}/>}  
    </>
  )
}

export default Interface
