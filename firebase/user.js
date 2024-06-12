import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export async function getUsers() {
  const userCol = collection(db, "Authentications");
  const userSnapshot = await getDocs(userCol);

  const users = userSnapshot.docs.map((doc) => {
    const id = doc.id;

    const data = doc.data();

    return { id, ...data };
  });

  return users;
}
