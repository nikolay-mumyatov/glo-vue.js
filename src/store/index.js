import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import links from './links';
import bestsellers from './bestsellers';
import coffeeCards from './coffeeCards';
import goodsCards from './goodsCards';

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffeeCards,
    goodsCards
  }
});

export default store;