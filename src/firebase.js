import firebase from "firebase";

const config = {
  apiKey: "AIzaSyARQzQEV6YkxNKQuT5i10Mt8G8LoeJxUCM",
  authDomain: "users-5dc8a.firebaseapp.com",
  databaseURL: "https://users-5dc8a.firebaseio.com",
  projectId: "users-5dc8a",
  storageBucket: "users-5dc8a.appspot.com",
  messagingSenderId: "429924995962"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
