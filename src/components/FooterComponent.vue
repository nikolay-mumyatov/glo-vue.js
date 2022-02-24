<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <nav-item-component
              v-for="item in links"
              :key="links.id"
              :link="item.link"
              :text="item.text"
              classLink="footer__item"
            >
              <template v-if="item.icon" v-slot:image>
                <img :src="require(`@/assets/logo/${item.icon}`)" alt="logo" />
              </template>
            </nav-item-component>

          </ul>
        </div>
      </div>

      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavItemComponent from '@/components/NavItemComponent.vue'

export default {
  components: {
    NavItemComponent
  },
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
