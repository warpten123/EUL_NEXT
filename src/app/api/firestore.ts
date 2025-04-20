import { getFirestore, doc, setDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Goal, SDGCollection } from "../types/SDG/SDGCard";

// Initialize Firestore instance
const db = getFirestore();

/**
 * Saves a user's goals to Firestore under the "userGoals" collection.
 * @param id Optional ID to use as the document ID. If not provided, a UUID will be generated.
 * @param goals Array of goal objects with goalName and goalPercent.
 */
export async function saveGoalsToFirestore(
  goals: Goal[],
  uid: string,
  resId: string
): Promise<void> {
  try {
    const documentId = `${uid}-${resId}`;

    const docRef = doc(db, "userGoals", documentId);

    await setDoc(docRef, {
      id: documentId,
      goals,
    });

    console.log(`Document successfully written with ID: ${documentId}`);
  } catch (error) {
    console.error("Error writing document to Firestore:", error);
    throw error;
  }


  
}

/**
 * Fetches all documents from the "userGoals" collection for a specific user ID.
 * @param userId The user ID to filter documents by.
 * @returns An array of documents matching the user ID.
 */
export async function fetchGoalsByUserId(userId: string): Promise<SDGCollection[]> {
  try {
    const userGoalsRef = collection(db, "userGoals");

    // Query to filter documents where the document ID starts with the userId
    const q = query(userGoalsRef, where("__name__", ">=", userId), where("__name__", "<", userId + "\uf8ff"));

    const querySnapshot = await getDocs(q);

    
    const goals = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        goals: data.goals ?? [], 
        ...data,
      } as SDGCollection;
    });

    console.log(`Fetched ${goals.length} documents for userId: ${userId}`);
    return goals;
  } catch (error) {
    console.error("Error fetching documents from Firestore:", error);
    throw error;
  }
}
