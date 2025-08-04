import React from 'react'

function Container({children}) {
  return (
    <div className=' w-full max-w-7xl mx-auto px-4'>
       {children}
       
            <div class="bg-white shadow-lg rounded-xl p-10 w-full max-w-sm text-center space-y-6">
          <h1 class="text-3xl font-bold text-gray-800">Get Started</h1>
          <p class="text-gray-500 text-lg">Start with Login or Sign Up</p>
          
          <div class="space-y-4">
              <button class="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
                    Login
              </button>
          
              <button class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Sign Up
              </button>
          </div>
  </div>
    </div>
  )
}

export default Container



