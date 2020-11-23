import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANTbDcLiHjxok-9xIjOsGCgSfZTxl8mkE",
  authDomain: "portfolio-4bd1e.firebaseapp.com",
  databaseURL: "https://portfolio-4bd1e.firebaseio.com",
  projectId: "portfolio-4bd1e",
  storageBucket: "portfolio-4bd1e.appspot.com",
  messagingSenderId: "1009584961408",
  appId: "1:1009584961408:web:b6506a877d175df152f365",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUser = async (user, additionalData) => {
  if(!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  const {exists} = snapshot;
  if(!exists) {
    const {displayName, email} = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(err) {
      console.log("Error Creating user", err.message)
    }
  }
  return userRef;
}
export default firebase;
