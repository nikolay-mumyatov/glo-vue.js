import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import links from './links';
import allCards from './allCards';

const store = new Vuex.Store({
  modules: {
    links,
    allCards
  }
});

export default store;