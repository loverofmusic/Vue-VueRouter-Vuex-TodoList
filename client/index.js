import Vue from 'vue'
import App from './app.vue'
import VueRouter from "vue-router";

import 'lib-flexible/flexible.js'

import './assets/styles/global.styl';

import createRouter from './router/index.js'
const router = createRouter()

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount("#root")