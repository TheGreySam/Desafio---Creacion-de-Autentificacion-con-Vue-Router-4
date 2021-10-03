import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../store';
import Login from '../views/Login.vue'
import Firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: false,
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
    component: Login,
    meta: {
      login: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.login) {
    if (Store.state.currentUser) {
    next();
  } else {
    next("/login")
  }
} else {
  next();
}

});

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

export default router;