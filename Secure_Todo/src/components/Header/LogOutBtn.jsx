import React from 'react'
import {logout} from "../../FireBase/auth" 
import { useDispatch } from "react-redux";
import { clearUser } from "../../store/todoSlice";


function LogOutBtn({className}) {
    
  const dispatch = useDispatch()

    const userLogOut = async()=>{
       try {
           const isDone = await logout();
            console.log("Logout successful");
            dispatch(clearUser())
            localStorage.removeItem("user");
           

    } catch (error) {
      console.error("Logout failed:", error.message);
    }
    }

  return (
    <button 
    className = {`bg-blue-700 text-white font-semibold py-2 my-1 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 w-[100px] h-[40px] text-center ${className}` }
     onClick={userLogOut}
    >
        Log Out
    </button>
  )
}

export default LogOutBtn
