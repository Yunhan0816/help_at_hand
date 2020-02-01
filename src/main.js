import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDGeogJsgASohgP7jQxHg512zAtRTk86yE",
  authDomain: "helpathand-b198d.firebaseapp.com",
  databaseURL: "https://helpathand-b198d.firebaseio.com",
  projectId: "helpathand-b198d",
  storageBucket: "helpathand-b198d.appspot.com",
  messagingSenderId: "256132494053",
  appId: "1:256132494053:web:b78804316ab78344aa9a0c",
  measurementId: "G-JDWY5LZZ9H"
});

export const db = firebase.firestore();

export const auth = firebase.auth();

// const authUI = new firebaseui.auth.AuthUI(auth);

// const authUIConfig = {
//     signInSuccessUrl: "/",
//     signInOptions: [
//         {
//             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//         },
//         {
//             provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             customParameters: {
//                 prompt: "select_account"
//             }
//         }
//     ]
// };

// export default app;
// export { auth, db, authUI, authUIConfig };

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
