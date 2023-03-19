import { collection, query, where, getDocs, addDoc, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase"

// call db
export async function verifyCharacter(character, colValue, rowValue) {

    const q = query(collection(db, "answer"), where("name", "==", character));
    const querySnapshot = await getDocs(q);
    const docData = querySnapshot.docs[0].data();

    if (docData.colValue === colValue && docData.rowValue === rowValue) {
        return true;
    }
    return false;
}

export async function addToCollection(name, time) {
    try {
        return await addDoc(collection(db, "score"), {
            name: name,
            time: time
        });
    } catch (e) {
        console.error("error adding document: ", e);
    }
}

export async function getRankingQuerySnapshot() {
    const q = query(collection(db, "score"), orderBy("time"), limit(5));
    const querySnapshot = await getDocs(q);
    return querySnapshot
}