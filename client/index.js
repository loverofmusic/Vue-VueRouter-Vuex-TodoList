import Vue from 'vue'
import App from './app.vue'
import VueRouter from "vue-router";

import 'lib-flexible/flexible.js'

import './assets/styles/global.styl';

import createRouter from './router/index.js'
const router = createRouter()

// router.beforeEach((to, from, next)=>{
  // console.log('before each invoked')
  // if(to.fullPath==='/app'){
  //   // next({path: '/login'})
  //   next('/login')
  // }else{
  //   next()
  // }
  // next()
// })

// router.beforeResolve((to, from, next)=>{
//   console.log('before Resolve invoked')
//   next()
// })

// router.afterEach((to, from)=>{
//   console.log('afterEach invoked')
// })

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount("#root")