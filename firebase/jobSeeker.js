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
  console.log("id is: ", id);
  const jobSeekerDoc = doc(db, "JobSeeker", id);
  console.log("test: ", jobSeekerDoc);
  try {
    await deleteDoc(jobSeekerDoc);
    console.log("Document deleted");
    toast.success("Deleted Successfully");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
