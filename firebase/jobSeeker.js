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

export async function getJobSeekers() {
  const jobSeekerCol = collection(db, "JobSeeker");
  const jobSeekerSnapshot = await getDocs(jobSeekerCol);

  const jobSeekers = jobSeekerSnapshot.docs.map((doc) => {
    const id = doc.id;

    const data = doc.data();

    return { id, ...data };
  });

  return jobSeekers;
}

export async function deleteJobSeeker(id) {
  const jobSeekerDoc = doc(db, "JobSeeker", id);
  const userDoc = doc(db, "Authentications", id);
  try {
    await deleteDoc(jobSeekerDoc);
    await deleteDoc(userDoc);
    console.log("Document deleted");
    revalidatePath("/job-seekers");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
