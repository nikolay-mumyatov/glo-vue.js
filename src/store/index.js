import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import tourCards from './tourCards';

const store = new Vuex.Store({
  modules: {
    tourCards
  }
});

export default store;