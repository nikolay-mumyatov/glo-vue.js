import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HeroView from '@/views/HeroView.vue';
import OurCoffeeView from '@/views/OurCoffeeView.vue';
import GoodsPageView from '@/views/GoodsPageView.vue';
import ContactsView from '@/views/ContactsView.vue';
import ThanksPageView from '@/views/ThanksPageView.vue';

const routes = [
  {path: '/', component: HeroView},
  {path: '/our-coffee', component: OurCoffeeView},
  {path: '/goods-page', component: GoodsPageView},
  {path: '/contacts', component: ContactsView},
  {path: '/thanks', component: ThanksPageView}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;