import React from 'react'

function Container({
  children,
}) {
  return (
    <div className=' w-[978px] max-w-7xl mx-auto my-8 mb-1.5 px-4 py-1.5 pb-3 ] flex flex-col items-center  hover:shadow-2xl rounded-2xl '>
       {children}
    </div>
  )
}

export default Container



