import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import toast from "react-hot-toast";

const db = getFirestore(app);

export async function getSponsors() {
  const sponsorCol = collection(db, "Sponsor");
  const sponsorSnapshot = await getDocs(sponsorCol);

  const sponsors = sponsorSnapshot.docs.map((doc) => {
    const id = doc.id;

    const data = doc.data();

    return { id, ...data };
  });

  return sponsors;
}

export async function deleteSponsor(id) {
  console.log("id is: ", id);
  const sponsorDoc = doc(db, "Sponsor", id);
  console.log("test: ", sponsorDoc);
  try {
    await deleteDoc(sponsorDoc);
    console.log("Document deleted");
    toast.success("Deleted Successfully");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
