import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export async function getJobSeekers() {
  const jobSeekerCol = collection(db, "JobSeeker");
  const jobSeekerSnapshot = await getDocs(jobSeekerCol);
  const jobSeekers = jobSeekerSnapshot.docs.map((doc) => doc.data());
  return jobSeekers;
}
