"use strict";

const allCards = {
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
    ],

    coffeeCards: [
      {
        id: 0,
        icon: "coffee-3.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        icon: "coffee-3.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        icon: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        icon: "coffee-3.jpg",
        title: "Africa Coffee 1kg",
        country: "Africa",
        price: 8.99,
      },
      {
        id: 4,
        icon: "coffee-3.jpg",
        title: "Argentina Coffee 2kg",
        country: "Argentina",
        price: 13.99,
      },
      {
        id: 5,
        icon: "coffee-3.jpg",
        title: "Pakistan Coffee 1kg",
        country: "Pakistan",
        price: 5.99,
      },
    ],

    goodsCards: [
      {
        id: 0,
        icon: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        icon: "good-1.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        icon: "good-1.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        icon: "good-1.jpg",
        title: "Africa Coffee 1kg",
        country: "Africa",
        price: 8.99,
      },
      {
        id: 4,
        icon: "good-1.jpg",
        title: "Argentina Coffee 2kg",
        country: "Argentina",
        price: 13.99,
      },
      {
        id: 5,
        icon: "good-1.jpg",
        title: "Pakistan Coffee 1kg",
        country: "Pakistan",
        price: 5.99,
      },
    ],
  },
  getters: {
    getBestsellersCards(state) {
      return state.bestsellers;
    },

    getCoffeeCards(state) {
      return state.coffeeCards;
    },

    getGoodsCards(state) {
      return state.goodsCards;
    }
  }
};

export default allCards;