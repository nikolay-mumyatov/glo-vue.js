<template>
  <li :class="classLink">
    <router-link :to="link">
      <slot name="image"></slot>
      <span v-if="text" >{{ text }}</span>
    </router-link>
  </li>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: false
      },
      classLink: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped></style>
