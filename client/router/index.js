import Router from "vue-router";

import routes from "./routes";

export default () => {
  return new Router({
    routes,
    mode: "history",
    // base: '/base/',
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    }
    // parseQuery(query){

    // },
    // stringifyQuery(obj){

    // }
    // fallback: true //在不支持history模式的浏览器里，如果设置为false，则变成多页应用，每次路由变了就重新请求server；如果设置为true则变成hash模式
  });
};