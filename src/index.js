import Vue from 'vue'
import App from './app.vue'

import './node_modules/lib-flexible/flexible.js.js'

import './assets/styles/global.styl';

new Vue({
  render: h => h(App)
}).$mount("#root")