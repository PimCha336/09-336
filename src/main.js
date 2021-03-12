import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyCWbmxkx9Eo2Tq1rcx_jgvDYb9cHysesus",
      authDomain: "vue09-4c7df.firebaseapp.com",
      projectId: "vue09-4c7df",
      storageBucket: "vue09-4c7df.appspot.com",
      messagingSenderId: "447207966963",
      appId: "1:447207966963:web:4aaaf75423e3234672cf86",
      measurementId: "G-QVBPLVTG55"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
