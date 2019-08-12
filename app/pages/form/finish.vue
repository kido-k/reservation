<template>
  <section v-if="loaded" class="form-wrapper">
    <FormTitle class="form-title"></FormTitle>
    <div class="finish-message">
      <h2>{{ formFinish.finishMessage }}</h2>
    </div>
  </section>
</template>

<script>
import FormTitle from '~/components/form/FormTitle.vue'

export default {
  components: {
    FormTitle
  },
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
    formFinish() {
      return this.$store.getters['form/getFinishData']
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuth) {
        this.$router.push('login')
      }
      this.loaded = true
    }, 0)
  },
  methods: {}
}
</script>

<style lang="scss" scope>
.form-wrapper {
  width: 100%;
  height: 100%;
  background-color: #e2e2e2;
}
.finish-message {
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
