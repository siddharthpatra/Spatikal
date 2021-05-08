import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDU0pS2XcxkBtGxUB6iRtAoh5Imb_qgb8w",
  authDomain: "spatikal-da41a.firebaseapp.com",
  projectId: "spatikal-da41a",
  storageBucket: "spatikal-da41a.appspot.com",
  messagingSenderId: "471007714468",
  appId: "1:471007714468:web:869231545572ffaab11a31",
  measurementId: "G-4NRESF74T4",
});

export const auth = app.auth();

export const firedb = firebase.firestore();

export const storage = firebase.storage();

export default app;
