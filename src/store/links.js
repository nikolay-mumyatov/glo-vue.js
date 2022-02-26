"use strict";

const links = {
  state: {
    links: [
      {
        id: 0,
        icon: "Logo.svg",
        iconBlack: "Logo_black.svg",
        link: "/",
      },
      {
        id: 1,
        text: "Our coffee",
        link: "/our-coffee",
      },
      {
        id: 2,
        text: "For your pleasure",
        link: "/goods-page",
      },
      {
        id: 3,
        text: "Contact us",
        link: "/contacts",
      },
    ],
  },
  getters: {
    getNavBarLinks(state) {
      return state.links;
    }
  }
};

export default links;