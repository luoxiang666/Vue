import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import Login from '../components/login/Login.vue';
import Register from '../components/register/Register.vue';



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    // { path: '/login',name:'Login', component: Login}
  ]
})
