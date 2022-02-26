<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">

      <nav-item-component
        v-for="item in links"
        :key="links.id"
        :link="item.link"
        :text="item.text"
        classLink="header__item"
      >
        <template v-if="item.icon" v-slot:image>
          <img  :src="require(`@/assets/logo/${item.icon}`)" alt="logo" />
        </template>
      </nav-item-component>
      
    </ul>
  </header>
</template>

<script>
  import NavItemComponent from '@/components/NavItemComponent.vue';

  export default {
    components: {
      NavItemComponent
    },
    computed: {
      links() {
        return this.$store.getters["getNavBarLinks"]
      }
    }
  };
</script>

<style lang="scss" scoped></style>
