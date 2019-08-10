<template>
  <section>
    <v-card class="name-wrapper">
      <div>
        <span>名前（カナ）</span>
      </div>
      <v-layout class="name__content">
        <v-flex xs12 sm3 class="check-box">
          <v-checkbox v-model="displayNameKana" class="mx-2"></v-checkbox>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout>
            <div>
              <label for="">セイ</label>
              <v-text-field
                class="text__field"
                :placeholder="familyNamePlaceHolder"
                flat
                solo
                hide-details
                >{{ familyNameValue }}</v-text-field
              >
            </div>
            <div class="name-margin"></div>
            <div>
              <label for="">メイ</label>
              <v-text-field
                class="text__field"
                :placeholder="firstNamePlaceHolder"
                flat
                solo
                hide-details
                >{{ firstNameValue }}</v-text-field
              >
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      displayNameKana: true,
      familyNameValue: '',
      familyNamePlaceHolder: 'タナカ',
      firstNameValue: '',
      firstNamePlaceHolder: 'タロウ'
    }
  },
  computed: {}
}
</script>

<style lang="scss" scope>
.name-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.name-margin {
  margin: 0 40px 0 0;
}
.name__content {
  margin: 10px 20px;
}
.text__field {
  border: solid 1px #d9d9d9;
}
</style>
