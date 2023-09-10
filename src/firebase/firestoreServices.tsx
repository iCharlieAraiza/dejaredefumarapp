import { auth, db } from "./index";
import { collection, query, where, getDocs, addDoc, updateDoc} from "firebase/firestore";


export const createProfile = async (profile) => {
  const email = auth.currentUser?.email;
  const usersCollction = collection(db, "users");
  const userQuery = query(usersCollction, where("username", "==", email));
  const userSnapshot = await getDocs(userQuery);
  const userDoc = userSnapshot.docs[0];

  if(userDoc) {
    console.log("USER ALREADY EXIST")
  }else {
    try {
      console.log("PROFILE", profile)
      profile.username = email;

      const userDoc = await addDoc(usersCollction, profile);
      return userDoc;  
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

}

export const updateProfile = async (profile) => {
  const email = auth.currentUser?.email;
  const usersCollction = collection(db, "users");
  const userQuery = query(usersCollction, where("username", "==", email));
  const userSnapshot = await getDocs(userQuery);
  const userDoc = userSnapshot.docs[0];
  const userRef = userDoc.ref;
  if(userDoc) {
    try {
      profile.username = email;
      return await updateDoc(userRef, profile);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
  return null;
}


export const getProfile = async () => {
  const email = auth.currentUser?.email;

  try {
      const usersCollction = collection(db, "users");
      const userQuery = query(usersCollction, where("username", "==", email));
      const userSnapshot = await getDocs(userQuery);
      const userDoc = userSnapshot.docs[0];
      const userData = await userDoc.data();
      console.log("SNAPSHOT", userData)
      return userData;
  }catch (e) {
      console.log("ERROR", e);
  }

  return null;
}
