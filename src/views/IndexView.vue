<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <card-component
          v-for="item in tourCards"
          :card="item"
          @onNavigate="navigate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  components: { 
    CardComponent 
  },
  computed: {
    tourCards() {
      return this.$store.getters["getCards"];
    }
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: 'tour-card', params: { id: id } });
    }
  }

};
</script>
