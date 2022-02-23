<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">

      <li v-for="link in links" class="header__item">

        <router-link :to="link.link">
          <img v-if="link.icon" :src="require(`@/assets/logo/${link.icon}`)" alt="logo" />
          <span v-else>{{link.text}}</span>
        </router-link>

      </li>
      
    </ul>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            id: 0,
            icon: "Logo.svg",
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
