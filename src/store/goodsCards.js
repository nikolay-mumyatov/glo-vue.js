"use strict";

const goodsCards = {
  state: {
    
    goodsCards: [
    ],

  },

  mutations: {
    setGoodsData(state, data) {
      state.goodsCards = data;

    }
  },

  actions:{
    setGoodsData({commit}, data) {
      commit('setGoodsData', data);
    }
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