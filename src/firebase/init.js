import firebase from "firebase/app";
const firebaseui = require("firebaseui");
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDGeogJsgASohgP7jQxHg512zAtRTk86yE",
  authDomain: "helpathand-b198d.firebaseapp.com",
  databaseURL: "https://helpathand-b198d.firebaseio.com",
  projectId: "helpathand-b198d",
  storageBucket: "helpathand-b198d.appspot.com",
  messagingSenderId: "256132494053",
  appId: "1:256132494053:web:b78804316ab78344aa9a0c",
  measurementId: "G-JDWY5LZZ9H"
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const db = app.firestore();

const authUI = new firebaseui.auth.AuthUI(auth);

const authUIConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account"
      }
    }
  ]
};

export default app;
export { auth, db, authUI, authUIConfig };
