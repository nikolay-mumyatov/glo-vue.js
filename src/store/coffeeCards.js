"use strict";

const coffeeCards = {
  state: {

    coffeeCards: [
      {
        id: 0,
        icon: "coffee-3.jpg",
        title: "COFFEE   Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        icon: "coffee-3.jpg",
        title: "COFFEE   Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        icon: "coffee-3.jpg",
        title: "COFFEE   AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        icon: "coffee-3.jpg",
        title: "COFFEE   Africa Coffee 1kg",
        country: "Africa",
        price: 8.99,
      },
      {
        id: 4,
        icon: "coffee-3.jpg",
        title: "COFFEE   Argentina Coffee 2kg",
        country: "Argentina",
        price: 13.99,
      },
      {
        id: 5,
        icon: "coffee-3.jpg",
        title: "COFFEE   Pakistan Coffee 1kg",
        country: "Pakistan",
        price: 5.99,
      },
    ],
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