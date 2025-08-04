import React from 'react'


function WelcomeIn({toggle}) {
  return (
     <div className=' flex justify-center items-center mx-[161px] my-[180px]  gap-[50px]'>
          <div  className=' w-[1050px] h-[350px] ' >
              <img src="/img/img_todo.png" alt="todo_icon_img" />
          </div>
          <div>
               <p className=' text-[60px] font-bold w-[378px] h-[90px] mx-0.5' >Welcome !</p>
               <p className=' text-[60px] font-bold w-[522px] h-[105px] ml-[65px] mt-4'>Secure ToDo...</p>
               <button  className=" bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-800 transition    duration-300 w-[345px] h-[50px] text-2xl mt-2 mr-[100px]"
                onClick={toggle}
                >
                    Get Started
               </button>
          </div>
     </div>    
  )
}



export default WelcomeIn
