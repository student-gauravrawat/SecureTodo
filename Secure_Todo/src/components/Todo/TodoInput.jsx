import React from 'react'
import {Input} from "../index"

function TodoInput() {
  return (
    <div>
       <Input
        label="Notes"
        placeholder="Write Your Notes... "
        type="notes"
        {
          ...register("notes", {
            required: true
          })
        }
       />
    </div>
  )
}

export default TodoInput
