<template>
  <section v-if="formName.displayName">
    <v-card class="name-wrapper">
      <div>
        <span>名前</span>
      </div>
      <v-layout class="name__content">
        <v-flex xs12 sm6>
          <v-layout>
            <div class="name__input">
              <label>{{ formName.familyNameLabel }}</label>
              <v-text-field
                v-model="answerData.name.familyName"
                class="text__field"
                :placeholder="formName.familyNamePlaceHolder"
                :required="formName.familyNameRequired"
                :error-messages="nameErrors"
                flat
                solo
                hide-details
              ></v-text-field>
            </div>
            <div class="name-margin"></div>
            <div>
              <label>{{ formName.firstNameLabel }}</label>
              <v-text-field
                v-model="answerData.name.firstName"
                class="text__field"
                :placeholder="formName.firstNamePlaceHolder"
                :required="formName.firstNameRequired"
                :error-messages="nameErrors"
                flat
                solo
                hide-details
              ></v-text-field>
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
      nameErrors: '名前を入力して下さい'
    }
  },
  computed: {
    formName() {
      return this.$store.getters['form/getNameData']
    },
    answerData() {
      return this.$store.getters['answer/getAnswerData']
    }
  }
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
  justify-content: center;
  margin: 10px 20px;
}
.name__input {
  cursor: pointer !important;
}
.text__field {
  cursor: pointer !important;
  border: solid 1px #d9d9d9;
}
</style>
