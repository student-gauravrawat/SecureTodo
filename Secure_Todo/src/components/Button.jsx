import React from 'react'

function Button({
    children,
    bgColor= 'bg-blue-700',
    textColor= 'text-white',
    font= 'font-semibold',
    w='w-[337px]',
    h='h-[50px]',
    ...props }) {
  return (
    <div>
       <button className={` ${w} ${h} ${bgColor} ${textColor} ${font} py-3 my-1 rounded-lg shadow-md hover:bg-blue-800 transition duration-300`}
       {...props}
       >
                 {children} 
       </button>
    </div>
  )
}

export default Button
