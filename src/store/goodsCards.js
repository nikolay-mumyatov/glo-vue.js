"use strict";

const goodsCards = {
  state: {
    
    goodsCards: [
      {
        id: 0,
        icon: "good-1.jpg",
        title: "GOODS   Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        icon: "good-1.jpg",
        title: "GOODS   Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        icon: "good-1.jpg",
        title: "GOODS   AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        icon: "good-1.jpg",
        title: "GOODS   Africa Coffee 1kg",
        country: "Africa",
        price: 8.99,
      },
      {
        id: 4,
        icon: "good-1.jpg",
        title: "GOODS   Argentina Coffee 2kg",
        country: "Argentina",
        price: 13.99,
      },
      {
        id: 5,
        icon: "good-1.jpg",
        title: "GOODS   Pakistan Coffee 1kg",
        country: "Pakistan",
        price: 5.99,
      },
    ],

  },

  getters: {

    getGoodsCards(state) {
      return state.goodsCards;
    },

    getGoodsById(state) {
      return (id) => {
        return state.goodsCards.find((card) => card.id === +id);
      };
    }

  }

};

export default goodsCards;