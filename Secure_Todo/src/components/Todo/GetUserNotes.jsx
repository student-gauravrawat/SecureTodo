import React from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/config";

export const GetUserNotes = async (uid) => {
    const q = query(
        collection(db, "posts"),
        where("createdBy.uid", "==", uid)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
