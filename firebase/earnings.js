import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export async function getEarnings() {
  const earningCol = collection(db, "Earning");
  const earningSnapshot = await getDocs(earningCol);

  const earnings = earningSnapshot.docs.map((doc) => {
    const id = doc.id;

    const data = doc.data();

    return { id, ...data };
  });

  return earnings;
}
