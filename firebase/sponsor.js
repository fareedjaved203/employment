import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export async function getSponsors() {
  const sponsorCol = collection(db, "Sponsor");
  const sponsorSnapshot = await getDocs(sponsorCol);
  const sponsors = sponsorSnapshot.docs.map((doc) => doc.data());
  return sponsors;
}
