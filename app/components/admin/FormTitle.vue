<template>
  <div>
    <v-card class="form-wrapper">
      <span>フォーム設定</span>
      <div class="form-contents">
        <div>
          <div class="form-title">
            <span>フォーム名</span>
          </div>
          <v-layout>
            <v-text-field
              v-model="formMain.title"
              class="text__field"
              flat
              solo
              hide-details
            >
            </v-text-field>
          </v-layout>
        </div>
        <div>
          <div class="form-detail">
            <span>フォームの内容</span>
          </div>
          <v-layout>
            <v-textarea
              v-model="formMain.detail"
              flat
              solo
              hide-details
              class="text__area"
            ></v-textarea>
          </v-layout>
        </div>
      </div>
    </v-card>
  </div>
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
.form-wrapper {
  padding: 20px;
}
.form-contents {
  margin: 0 0 50px 0;
  padding: 20px 200px;
  border-radius: 5px;
}
.form-title {
  width: 50%;
}
.form-detail {
  margin: 30px 0 0 0;
}
.text__field {
  border: solid 1px #d9d9d9;
}
.text__area {
  border: solid 1px #d9d9d9;
}
</style>
