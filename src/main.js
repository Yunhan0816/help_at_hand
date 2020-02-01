// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import vuetify from "./plugins/vuetify";
// import firebase from "firebase/app";
// require("firebase/firestore");
// require("firebase/auth");

// Vue.config.productionTip = false;

// firebase.initializeApp({
//   apiKey: "AIzaSyDGeogJsgASohgP7jQxHg512zAtRTk86yE",
//   authDomain: "helpathand-b198d.firebaseapp.com",
//   databaseURL: "https://helpathand-b198d.firebaseio.com",
//   projectId: "helpathand-b198d",
//   storageBucket: "helpathand-b198d.appspot.com",
//   messagingSenderId: "256132494053",
//   appId: "1:256132494053:web:b78804316ab78344aa9a0c",
//   measurementId: "G-JDWY5LZZ9H"
// });

// export const db = firebase.firestore();

// export const auth = firebase.auth();

// // const authUI = new firebaseui.auth.AuthUI(auth);

// // const authUIConfig = {
// //     signInSuccessUrl: "/",
// //     signInOptions: [
// //         {
// //             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
// //         },
// //         {
// //             provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// //             customParameters: {
// //                 prompt: "select_account"
// //             }
// //         }
// //     ]
// // };

// export default app;
// export { auth, db, authUI, authUIConfig };

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./firebase/init.js";
// import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";
// import VueSidebarMenu from "vue-sidebar-menu";
// import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
// Vue.use(VueSidebarMenu);

Vue.config.productionTip = false;
var app = null;
firebase.auth().onAuthStateChanged(async () => {
  if (!app) {
    // await store.dispatch("setUser");
    new Vue({
      router,
      // store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
export const db = firebase.firestore();
export default app;
