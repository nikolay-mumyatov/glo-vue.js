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
              <template v-if="item.iconBlack" v-slot:image>
                <img
                  :src="require(`@/assets/logo/${item.iconBlack}`)"
                  alt="logo"
                />
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
import NavItemComponent from "@/components/NavItemComponent.vue";

export default {
  components: {
    NavItemComponent,
  },
  computed: {
    links() {
      return this.$store.getters["getNavBarLinks"];
    },
  },
};
</script>

<style lang="scss" scoped></style>
