<template>
  <main>
    <div class="banner goodspage-banner">
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
              src="@/assets/img/coffee_goods.jpg"
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
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">

              <card-product-component
                v-for="item in goodsCards"
                class="shop__item"
                :icon="item.icon"
                :title="item.title"
                :price="item.price"
              >
                <template v-if="item.country" v-slot:country>
                  <div class="shop__item-country"> {{ item.country }} </div>
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

export default {
  components: {
    NavBarComponent,
    CardProductComponent,
    HeaderTitleComponent,
  },
  data() {
    return {
      title: "For your pleasure",
      goodsCards: [
        {
          id: 0,
          icon: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 1,
          icon: "good-1.jpg",
          title: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: "15.99",
        },
        {
          id: 2,
          icon: "good-1.jpg",
          title: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 3,
          icon: "good-1.jpg",
          title: "Africa Coffee 1kg",
          country: "Africa",
          price: "8.99",
        },
        {
          id: 4,
          icon: "good-1.jpg",
          title: "Argentina Coffee 2kg",
          country: "Argentina",
          price: "13.99",
        },
        {
          id: 5,
          icon: "good-1.jpg",
          title: "Pakistan Coffee 1kg",
          country: "Pakistan",
          price: "5.99",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
