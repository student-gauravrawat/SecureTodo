import React, { useEffect, useState } from 'react'
import {Button, Input} from "../index"
import {useForm} from "react-hook-form"
import {createPost, updatePost} from "../../FireBase/service"
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";


function TodoInput({editNote, clearEdit}) {

  const{register, handleSubmit, reset, setValue}= useForm()
  const { user } = useSelector((state) => state.auth); // auth slice से user
  const[editId, setEditId] = useState(null)

  useEffect(()=>{
    if(editNote){
       setEditId(editNote.id)
       setValue("notes", editNote.notes)
    }
  },[editNote, setValue])

  const submitNotes = async(data)=>{
     try {
        if (editId) {
        await updatePost(editId, {
          notes: data.notes,
          updatedAt: serverTimestamp(),
        });
        setEditId(null);
        clearEdit();
         
      } else {
        await createPost({
          notes: data.notes,
          completed:false,
          createdAt: serverTimestamp(),
          createdBy: {
            uid: user.uid,
            email: user.email
          }
        });
      }
      reset()
      setTimeout(() => {
             alert("Please, Refresh Your Account")
         }, 1)
     } catch (error) {
        console.log("error in submit" , error.message)
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
                 {editId ? "Update" : "Add"}
             </Button>
          </div>
       </form>
    </div>
  )
}

export default TodoInput
