"use server";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import { revalidatePath } from "next/cache";

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
  const sponsorDoc = doc(db, "Sponsor", id);
  const userDoc = doc(db, "Authentications", id);
  try {
    await deleteDoc(sponsorDoc);
    await deleteDoc(userDoc);
    console.log("Document deleted");
    revalidatePath("/sponsors");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
