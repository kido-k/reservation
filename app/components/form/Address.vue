<template>
  <section v-if="formAddress.displayAddress">
    <v-card class="address-wrapper">
      <div>
        <div>
          <span>郵便番号</span>
        </div>
        <v-layout class="address-contents">
          <v-flex>
            <v-layout class="zip-code__content">
              <v-flex xs12 sm6>
                <label for="">郵便番号</label>
                <v-text-field
                  v-model="answerData.address.zipCode"
                  class="text__field"
                  flat
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="prefecture__content">
              <v-flex xs12 sm6>
                <label>都道府県</label>
                <v-text-field
                  v-model="answerData.address.prefecture"
                  class="text__field"
                  flat
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="city__content">
              <v-flex>
                <label>市区町村</label>
                <v-text-field
                  v-model="answerData.address.city"
                  class="text__field"
                  flat
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="building__content">
              <v-flex>
                <label for="">建物名・部屋番号</label>
                <v-text-field
                  v-model="answerData.address.building"
                  class="text__field"
                  flat
                  solo
                  hide-details
                >
                </v-text-field>
              </v-flex>
            </v-layout>
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
    formAddress() {
      return this.$store.getters['form/getAddressData']
    },
    answerData() {
      return this.$store.getters['answer/getAnswerData']
    }
  }
}
</script>

<style lang="scss" scope>
.address-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.address-contents {
  margin: 10px 20%;
}
.zip-code__content {
  margin: 0 20px 20px 0;
}
.prefecture__content {
  margin: 0 20px 20px 0;
}
.city__content {
  margin: 0 20px 20px 0;
}
.building__content {
  margin: 0 20px 20px 0;
}
.text__field {
  border: solid 1px #d9d9d9;
}
</style>
