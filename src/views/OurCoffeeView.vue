<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>

        <header-title-component :title="this.title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                @input="onSearch($event)"
                v-model="inputValue"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">
                <button class="shop__filter-btn" @click="clearSort('')">
                  Or filter
                </button>
              </div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-product-component
                v-for="item in coffeeCards"
                class="shop__item"
                :card="item"
                @onNavigate="navigate"
              >
                <template v-if="item.country" v-slot:country>
                  <div class="shop__item-country">{{ item.country }}</div>
                </template>
              </card-product-component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import HeaderTitleComponent from "@/components/HeaderTitleComponent.vue";

import { navigate } from "../mixins/navigate";
import { debounce } from "debounce";

export default {
  components: {
    NavBarComponent,
    CardProductComponent,
    HeaderTitleComponent,
  },

  data() {
    return {
      title: "Our Coffee",
      name: "coffee",
      inputValue: ''
    };
  },

  computed: {
    coffeeCards() {
      return this.$store.getters["getCoffeeCards"];
    },
  },

  methods: {
    onSearch: debounce(function (event) {
      this.onSort(event.target.value);
    }, 500),

    onSort(value) {
      fetch(`http://localhost:3000/coffee?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch("setCoffeeData", data);
        });
    },

    clearSort(value) {
      this.onSort(value);
      this.inputValue = '';
    }
  },

  mixins: [navigate],
  mounted() {
    fetch("http://localhost:3000/coffee/")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setCoffeeData", data);
      });
  },
};
</script>

<style lang="scss" scoped></style>
