<template>
  <a href="single.html" @click.prevent="onEmmit(card.id)">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img
        :src="require(`@/assets/img/${card.img}`)"
        class="mb-3"
        :alt="card.title"
      />
      <h3 class="">{{ card.title }}</h3>
      <div class="description">
        {{ card.desc }}
        <br />
        <span>Читать далее ...</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>
