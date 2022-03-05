"use strict";

const coffeeCards = {
  state: {

    coffeeCards: [
    ],
    sortValue: ''
  },

  mutations: {
    setCoffeeData(state, data) {
      state.coffeeCards = data;
    }
  },

  actions:{
    setCoffeeData({commit}, data) {
      commit('setCoffeeData', data);
    }
  },

  getters: {
    getCoffeeCards(state) {
      return state.coffeeCards;
    },

    getCoffeeById(state) {
      return (id) => {
        return state.coffeeCards.find((card) => card.id === +id);
      };
    }

  }
};

export default coffeeCards;