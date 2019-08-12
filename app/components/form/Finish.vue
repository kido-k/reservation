<template>
  <section>
    <div class="save-content">
      <v-btn class="save-btn" color="blue" dark @click="sendData()">{{
        formFinish.finishButton
      }}</v-btn>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    formFinish() {
      return this.$store.getters['form/getFinishData']
    }
  },
  methods: {
    sendData() {
      // this.$router.push('/form/finish')
    }
  }
}
</script>

<style lang="scss" scope>
.finish-wrapper {
  padding: 20px;
}
.finish-contents {
  margin: 0 0 50px 0;
  padding: 20px 200px;
  border-radius: 5px;
}
.finish-message {
  width: 50%;
}
.finish-button {
  margin: 30px 0 0 0;
}
.finish-url {
  margin: 30px 0 0 0;
}
.text__field {
  border: solid 1px #d9d9d9;
}
.text__area {
  border: solid 1px #d9d9d9;
}
</style>
