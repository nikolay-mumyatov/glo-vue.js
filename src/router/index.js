import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import IndexView from '@/views/IndexView.vue';
import SingleView from '@/views/SingleView.vue';

const routes = [
  {path: '/', component: IndexView},
  {name: 'tour-card', path: '/tour/:id', component: SingleView},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;