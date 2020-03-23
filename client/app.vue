<template>
  <div id="app">
    <div id="cover">

      <Header />

      <!-- <Todo></Todo> -->
      <!-- <router-link :to="{name: 'app'}">app</router-link>  -->
      <!-- <router-link to="/login">login</router-link> -->
      <!-- <router-link to="/login/exact">login exact</router-link> -->
      <!-- <router-link to="/app/123">app</router-link> -->
      <!-- <router-link to="/app/456">app</router-link> -->
      <transition name="fade">
        <router-view />
      </transition>
      
      <Footer />
      <!-- <router-view name="a" /> -->
    </div>
  </div>
</template>

<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.vue";
// import Todo from "./views/todo/todo.vue";

export default {
  // name: 'App',
  components: {
    Header,
    Footer
    // Todo
  }
};
</script>

<style lang="stylus" scoped>
#cover
    display flex
    flex-direction column
    align-items: center;
    height 100vh

#loading
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(255,255,255,.3)
    z-index 99
    display flex
    align-items center
    justify-content center

</style>
