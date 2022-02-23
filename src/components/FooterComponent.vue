<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <li v-for="link in links" class="footer__item">

              <router-link :to="link.link">
                <img v-if="link.icon" :src="require(`@/assets/logo/${link.icon}`)" alt="logo" />
                <span v-else>{{ link.text }}</span>
              </router-link>

            </li>

          </ul>
        </div>
      </div>

      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          icon: "Logo_black.svg",
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
