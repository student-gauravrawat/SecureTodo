import React from 'react'

function NotesInstruction() {
  return (
    <div className=' ml-[40px] mt-7 '>
      <p className=' text-[30px] font-medium'>Instructions:</p>
      <ol className=' ml-7 text-lg ' >
          <li> <span className=' text-[25px] font-medium '>1.  </span>In this, You can store your private notes.</li>
          <li> <span className=' text-[25px] font-medium '>2.  </span>You can edit your notes.</li>
          <li> <span className=' text-[25px] font-medium '>3.  </span>You can delete your notes.</li>
          <li> <span className=' text-[25px] font-medium '>4.  </span>You can see seprate list of completed notes.</li>
          <li> <span className=' text-[25px] font-medium '>5.  </span>You can see seprate list of uncompleted notes.</li>
          <li> <span className=' text-[25px] font-medium '>6.  </span>Always refresh page after add & update notes.</li>
      </ol>
    </div>
  )
}

export default NotesInstruction
