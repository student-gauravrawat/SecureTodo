import React from 'react'
import {Button, Input} from "../index"
import {useForm} from "react-hook-form"
import {createPost} from "../../FireBase/service"
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";


function TodoInput() {

  const{register, handleSubmit, reset}= useForm()
  const { user } = useSelector((state) => state.auth); // auth slice से user

  const submitNotes = async(data)=>{
     try {
        await createPost({
          notes: data.notes,
          createdAt: serverTimestamp(),
          createdBy: {
               uid: user.uid,
               email: user.email
      }
  })
      //   console.log(data)
      //   console.log("Note added by:", user.email)
        reset()
     } catch (error) {
        console.log("error in create post" , error.message)
     }
  }

  return (
    <div>
       <form onSubmit={handleSubmit(submitNotes)}>
          <div className=' flex justify-center  items-center '>
              <Input
                 placeholder="Write Your Notes... "
                 type="text"
                 className='hover:shadow-2xl'
                 {
                   ...register("notes", {
                     required: true
                   })
        }
       />
             <Button w='w-[80px]' h='h-[45px]' className='text-xl ml-5 mb-5 ' type='submit'>
                Add
             </Button>
          </div>
       </form>
    </div>
  )
}

export default TodoInput
