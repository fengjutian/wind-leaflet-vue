// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'leaflet/dist/leaflet.js'
import 'leaflet/dist/leaflet.css'

import 'leaflet-velocity/dist/leaflet-velocity.css'
import 'leaflet-velocity/dist/leaflet-velocity.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
