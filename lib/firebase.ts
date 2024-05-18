// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBxuu44zyloPSiDP27bWRmmcHYUEFX4Mk",
  authDomain: "jd-soc-med.firebaseapp.com",
  projectId: "jd-soc-med",
  storageBucket: "jd-soc-med.appspot.com",
  messagingSenderId: "440837033803",
  appId: "1:440837033803:web:d7d3da85b8d5cd9b0ea2ce",
  measurementId: "G-RMGBNT0JRY",
};

// if (!firebase.getApps.length) {
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const firebaseAuth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();
