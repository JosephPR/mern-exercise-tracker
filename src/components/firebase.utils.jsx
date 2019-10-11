import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDOk5c6YMaF3Y7HAxDmdNgpm9vFX-Op9Jk",
    authDomain: "exercise-tracker-dba22.firebaseapp.com",
    databaseURL: "https://exercise-tracker-dba22.firebaseio.com",
    projectId: "exercise-tracker-dba22",
    storageBucket: "exercise-tracker-dba22.appspot.com",
    messagingSenderId: "863354703036",
    appId: "1:863354703036:web:7908baa53b55bec46b14b9",
    measurementId: "G-84EG308CSE"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
