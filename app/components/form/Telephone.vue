<template>
  <section v-if="formTelephone.displayTelephone">
    <v-card class="telephone-wrapper">
      <div>
        <div class="telephone">
          <span>電話番号</span>
        </div>
        <v-layout class="telephone__content">
          <v-flex>
            <label for="">電話番号</label>
            <v-text-field
              v-model="answerData.telephone.telephone"
              class="text__field"
              :required="formTelephone.requiredTelephone"
              flat
              solo
              hide-details
            ></v-text-field>
          </v-flex>
        </v-layout>
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
    formTelephone() {
      return this.$store.getters['form/getTelephoneData']
    },
    answerData() {
      return this.$store.getters['answer/getAnswerData']
    }
  }
}
</script>

<style lang="scss" scope>
.telephone-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.telephone__content {
  margin: 10px 10%;
}
</style>
