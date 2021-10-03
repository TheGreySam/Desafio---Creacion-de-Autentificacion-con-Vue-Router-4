import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../store';
import Login from '../views/Login.vue'
import Firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      login: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.beforeEach((to, from, next) => {
//  let user = Firebase.auth().currentUser;
//  let authRequired = to.matched.some(rpute => router.meta.login);
//  if (!user && authRequired) {
//    next('login');
//  } else if (user && !authRequired) {
//    next('home');
//  } else {
//    next();
//  }
//})

export default router
