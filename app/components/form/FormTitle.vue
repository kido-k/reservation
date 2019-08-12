<template>
  <section>
    <div class="header-wrapper">
      <h2>{{ formMain.title }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    formMain() {
      return this.$store.getters['form/getMainData']
    }
  }
}
</script>

<style lang="scss" scope>
.header-wrapper {
  padding: 20px;
  width: 100%;
  background-color: #fff;
  text-align: center;
}
</style>
