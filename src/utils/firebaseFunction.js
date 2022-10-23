// saving new items

import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItems = async(data) => {
    await setDoc(doc(firestore, "watchItems", `${Date.now()}`), data, {
        merge: true,
    });
};

//get all food items
export const AllWatchItems = async() => {
    const items = await getDocs(
        query(collection(firestore, "watchItems"), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
};