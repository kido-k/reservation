<template>
  <section v-if="formNameKana.displayNameKana">
    <v-card class="name-wrapper">
      <div>
        <span>名前（カナ）</span>
      </div>
      <v-layout class="name__content">
        <v-flex xs12 sm6>
          <v-layout>
            <div>
              <label for="">セイ</label>
              <v-text-field
                v-model="answerData.nameKana.familyNameKana"
                class="text__field"
                :placeholder="formNameKana.familyNameKanaPlaceHolder"
                :required="formNameKana.familyNameKanaRequired"
                flat
                solo
                hide-details
              ></v-text-field>
            </div>
            <div class="name-margin"></div>
            <div>
              <label for="">メイ</label>
              <v-text-field
                v-model="answerData.nameKana.firstNameKana"
                class="text__field"
                :placeholder="formNameKana.firstNameKanaPlaceHolder"
                :required="formNameKana.firstNameKanaRequired"
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
    return {}
  },
  computed: {
    formNameKana() {
      return this.$store.getters['form/getNameKanaData']
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
  margin: 10px 20px;
}
.text__field {
  border: solid 1px #d9d9d9;
}
</style>
