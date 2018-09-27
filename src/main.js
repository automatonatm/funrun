import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCD26B0wj5zAor_bYeMBRaEgp8tZdFWNnU',
      authDomain: 'funrun-b76b3.firebaseapp.com',
      databaseURL: 'https://funrun-b76b3.firebaseio.com',
      projectId: 'funrun-b76b3',
      storageBucket: 'funrun-b76b3.appspot.com',
    })
  }
})
