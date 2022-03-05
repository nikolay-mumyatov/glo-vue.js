<template>
  <div class="best__item" @click="onEmmit(card.id)">
    <img :src="card.image" :alt="card.image" />
    <div class="best__item-title">{{ card.name }}</div>
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
