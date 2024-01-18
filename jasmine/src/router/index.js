import Vue from 'vue';
import VueRouter from 'vue-router';
// import Dashboard from '@/views/Dashboard.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router;
