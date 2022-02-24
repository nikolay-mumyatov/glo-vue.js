<template>
    <div class="header__title">
      <h1 class="title-big">{{ title }}</h1>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>