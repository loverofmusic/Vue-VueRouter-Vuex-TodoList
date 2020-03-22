import Vue from 'vue'
import App from './app.vue'

import 'lib-flexible/flexible.js'

import './assets/styles/global.styl';

new Vue({
  render: h => h(App)
}).$mount("#root")