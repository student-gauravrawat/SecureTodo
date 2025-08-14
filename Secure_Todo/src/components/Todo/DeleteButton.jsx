// src/components/DeleteButton.jsx
import React from "react";
import { deletePost } from "../../FireBase/service";

function DeleteButton({ postId, onDelete }) {
  const handleDelete = async () => {
    try {
      await deletePost(postId); //  delete from Firebase
      if (onDelete)( onDelete(postId)); // UI update callback
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="flex items-center justify-center w-[60px] h-[30px]  rounded-lg bg-gray-100 hover:bg-red-300 transition " 
    >
     Delete
    </button>
  );
}

export default DeleteButton;
