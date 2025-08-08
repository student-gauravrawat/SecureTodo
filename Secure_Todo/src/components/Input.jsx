import React, { useId } from 'react'

function Input({
  label="Email",
  type='text',
  className='',
  ...props
}, ref) {
  
  const id = useId()
  
  return (

    <div className='flex-col flex '>
         { label && <label className="inline-block  pl-2 font-semibold  " htmlFor={id} > {label} </label> }
            <input
             type={type}
             className={` p-2 m-auto my-2 mb-5 rounded-lg bg-white focus:outline-none focus:ring-0 w-[850px]  ${className}   `}
             ref={ref}
             {...props}
             id={id}
            />
    </div>
  )
}

export default React.forwardRef(Input)
