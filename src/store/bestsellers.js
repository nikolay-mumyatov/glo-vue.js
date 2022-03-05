"use strict";

const bestsellers = {
  state: {

    bestsellers: [
      {
        id: 0,
        icon: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: 1,
        icon: "coffee-2.jpg",
        title: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: 2,
        icon: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
    ]

  },

  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data;

    }
  },

  actions:{
    setBestsellersData({commit}, data) {
      commit('setBestsellersData', data);
    }
  },

  getters: {

    getBestsellersCards(state) {
      return state.bestsellers;
    },
    
  }
};

export default bestsellers;