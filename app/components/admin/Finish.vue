<template>
  <section>
    <v-card class="finish-wrapper">
      <span>完了画面</span>
      <div class="finish-contents">
        <div>
          <div class="finish-message">
            <span>完了メッセージ</span>
          </div>
          <v-layout>
            <v-textarea
              v-model="formFinish.finishMessage"
              flat
              solo
              hide-details
              class="text__area"
            ></v-textarea>
          </v-layout>
        </div>
        <div>
          <div class="finish-button">
            <span>完了ボタン名</span>
          </div>
          <v-layout>
            <v-text-field
              v-model="formFinish.finishButton"
              class="text__field"
              flat
              solo
              hide-details
            >
            </v-text-field>
          </v-layout>
        </div>
        <div>
          <div class="finish-url">
            <span>完了後URL</span>
          </div>
          <v-layout>
            <v-text-field
              v-model="formFinish.finishUrl"
              class="text__field"
              flat
              solo
              hide-details
            >
            </v-text-field>
          </v-layout>
        </div>
      </div>
    </v-card>
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
