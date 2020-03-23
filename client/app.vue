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
      <!-- <p>{{count}}</p> -->
      <p v-if="false">{{fullName}}</p>
      <p v-if="false">{{counter}}</p>
    </div>
  </div>
</template>

<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.vue";
// import Todo from "./views/todo/todo.vue";
import {mapState, mapGetters} from 'vuex'

export default {
  // name: 'App',
  components: {
    Header,
    Footer
    // Todo
  },
  mounted() {
    // console.log(this.$store);
    // let i = 1;
    // setInterval(()=>{
    //   this.$store.commit('updateCount', i++)
    // },1000)
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    // ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    ...mapState({
      counter: (state) => state.count + 5
    }),
    // fullName() {
    //   return this.$store.getters.fullName
    // }
    ...mapGetters(['fullName'])
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
