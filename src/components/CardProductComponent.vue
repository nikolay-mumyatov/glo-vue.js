<template>
  <div class="best__item" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/./img/${card.icon}`)" :alt="card.icon" />
    <div class="best__item-title">{{ card.title }}</div>
    <slot name="country"></slot>
    <div class="best__item-price">{{ card.price | addCurrency }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      onEmmit(id) {
        this.$emit('onNavigate', id);
      }
    }
  }
</script>

<style lang="scss" scoped></style>
