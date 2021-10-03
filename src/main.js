import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js";


import Firebase from "firebase"
import { firebaseConfig } from "../firebase-config"
import { Message } from "element-ui" 

Firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false
Vue.use(Element)



new Vue({
  router,
  store,
  Firebase,
  render: h => h(App)
}).$mount('#app')
