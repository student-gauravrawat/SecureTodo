import { db, storage } from "../config/config";
import { collection, addDoc, getDoc, updateDoc, deleteDoc, getDocs, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

// Firestore: Create post
export const createPost = async (post) => {
  const postRef = await addDoc(collection(db, "posts"), post);
  return postRef;
};

// Firestore: Get single post
export const getPost = async (postId) => {
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// Firestore: Get all posts
export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Firestore: Update post
export const updatePost = async (postId, updatedData) => {
  const docRef = doc(db, "posts", postId);
  await updateDoc(docRef, updatedData);
};

// Firestore: Delete post
export const deletePost = async (postId) => {
  const docRef = doc(db, "posts", postId);
  await deleteDoc(docRef);
};

// File upload
export const uploadFile = async (file) => {
  const storageRef = ref(storage, `images/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};

// File delete
export const deleteFile = async (fileUrl) => {
  const storageRef = ref(storage, fileUrl);
  await deleteObject(storageRef);
};
