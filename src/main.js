import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false

firebase.initializeApp({


  
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
