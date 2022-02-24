<template>
  <div class="best__item">
    <img :src="require(`@/assets/./img/${icon}`)" :alt="icon" />
    <div class="best__item-title">{{ title }}</div>
    <div v-if="country" class="shop__item-country">{{ country }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: false
      },
      price: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped></style>
