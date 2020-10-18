import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * Verifica se a senha é valida antes de acessar a rota, se sim continua, se nao retorna para o login
 */
router.beforeEach(async (to, from, next) => {
  if (to.name !== 'Login' && !store.state.token) {
    try {
      await store.dispatch('ACTION_STORE_TOKEN', localStorage.getItem('token'));
      next();
    } catch (error) {
      next('Login');
    }
  }

  next();
})

export default router;
