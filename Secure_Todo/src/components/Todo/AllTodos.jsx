import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GetUserNotes } from './GetUserNotes';

function AllTodos() {
  const { user } = useSelector((state) => state.auth); // authSlice से user निकाला
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      if (user?.uid) { // अगर यूज़र लॉगिन है
        const userNotes = await GetUserNotes(user.uid); // नोट्स लाओ
        setNotes(userNotes);
      }
    };
    fetchNotes();
  }, [user]);

  return (
    <div>
    <p>{user.email}</p>
      <h2 className="text-xl font-bold mb-4">Your Notes</h2>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="p-3 border rounded mb-2">
            <p>{note.notes}</p>
            <small className="text-gray-500">
              Added on: {note.createdAt?.seconds 
                ? new Date(note.createdAt.seconds * 1000).toLocaleString()
                : 'No date'}
            </small>
          </div>
        ))
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
}

export default AllTodos;
