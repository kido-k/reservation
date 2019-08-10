<template>
  <section>
    <v-card class="form-wrapper">
      <div>
        <div class="form-title">
          <span>フォーム名</span>
        </div>
        <v-layout>
          <v-text-field class="text__field" flat solo hide-details>{{
            formTitle
          }}</v-text-field>
        </v-layout>
      </div>
      <div>
        <div class="form-detail">
          <span>フォームの内容</span>
        </div>
        <v-layout>
          <v-textarea
            flat
            solo
            hide-details
            class="text__area"
            :value="formDetail"
          ></v-textarea>
        </v-layout>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formTitle: '',
      formDetail: ''
    }
  },
  computed: {}
}
</script>

<style lang="scss" scope>
.form-wrapper {
  margin: 50px 0 50px 0;
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
