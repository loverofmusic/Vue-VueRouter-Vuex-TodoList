import Todo from "../views/todo/todo.vue";
import Login from "../views/login/login.vue";

const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    props: true,//不需要再通过this.$route来获取动态id
    // props: (route) => ({id: route.query.b}),
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'this is description'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
export default routes;