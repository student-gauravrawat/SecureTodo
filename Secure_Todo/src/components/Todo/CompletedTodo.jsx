import React,  { useEffect, useState }from 'react'
import { useSelector } from 'react-redux';
import { GetUserNotes } from './GetUserNotes';
import {DeleteButton, EditButton, TodoInput} from "../index"
import { updatePost } from "../../FireBase/service";

function CompletedTodo() {

    const { user } = useSelector((state) => state.auth); // getting slice fron auth
    const [notes, setNotes] = useState([]);
    const [wait, setWait]= useState("Wait for Notes...")
    const [editNote, setEditNote] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      if (user?.uid) { 
        const userNotes = await GetUserNotes(user.uid); // get notes
        setNotes(userNotes);
      }
    };
    fetchNotes();
  }, [user]);

  useEffect(() => {
    
      if (notes.length >= 0 ) {
        const timer = setTimeout(() => {
        setWait("");
       }, 2000); // message will delete after 1 second
       return () => clearTimeout(timer);
     }
   }, [notes]);

const handleNoteDelete = (deletedId) => {
    setNotes(notes.filter(note => note.id !== deletedId));
  };

  const handleEditNote = (note) => {
     setEditNote(note)
  };

  const clearEdit = ()=>{
    setEditNote(null)
  }

   // ✅ Completed toggle function
  const toggleComplete = async (id, currentStatus) => {
    try {
      await updatePost(id, { completed: !currentStatus });
      setNotes(prevNotes =>
        prevNotes.map(note =>
          note.id === id ? { ...note, completed: !currentStatus } : note
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

 const completedNotes = notes.filter(note => note.completed === true);

  return (
    <div className=' text-center   '>
     <TodoInput editNote={editNote} clearEdit={clearEdit} />
        {completedNotes.length > 0 ? (
              
             <div className="space-y-4 max-w-3xl mx-auto mt-8">
                { completedNotes.map((note)=>(
                 <div key={note.id} className='flex items-center justify-between bg-white shadow-sm rounded-xl p-4 border border-gray-100 hover:shadow-md transition'>

                      <div className=' flex  items-center justify-between   w-full'>
                             <input
                               type="checkbox"
                               checked={note.completed || false}
                               onChange={() => toggleComplete(note.id, note.completed)}
                               className="mr-3 w-5 h-5"
                             />
                            <p className={`text-gray-800 text-lg  flex-1 ${note.completed ? "line-through font-mono  text-xl" : ""}`}>
                                   {note.notes}
                            </p>
                            <div className='flex  space-x-3 ml-3'>
                              <EditButton note={note} onEdit={handleEditNote} />
                              <DeleteButton postId={note.id} onDelete={handleNoteDelete} />
                            </div>
                         
                      </div>
                      <br />
              </div>
              ))}

             </div>
         ):
         ( 
          <div className=' text-2xl '>
             <p className=' text-[50px] text-black font-mono'>
                {wait || <span className="text-red-600">Sorry No Notes....</span>}
             </p>
             
          </div>
         )}

    </div>
  )
}

export default CompletedTodo
