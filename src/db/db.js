import { collection, query, where, getDocs } from "firebase/firestore";
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