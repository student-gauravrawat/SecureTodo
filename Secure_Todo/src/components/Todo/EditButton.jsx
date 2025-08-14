import React from 'react'
import { Button } from '../index'

function EditButton({ note, onEdit }) {
  return (
    <button
    
      className='px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-green-200 transition '
      onClick={() => onEdit(note)}
    >
      Edit
    </button>
  )
}

export default EditButton
