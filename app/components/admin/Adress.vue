<template>
  <section>
    <v-card class="adress-wrapper">
      <div>
        <div>
          <span>郵便番号</span>
        </div>
        <v-layout class="adress-contents">
          <v-flex xs12 sm3 class="check-box">
            <v-checkbox v-model="diplayAdress" class="mx-2"></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
            <v-layout class="zip-code__content">
              <v-flex xs12 sm6>
                <label for="">郵便番号</label>
                <v-text-field class="text__field" flat solo hide-details>{{
                  zipCode
                }}</v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="prefecture__content">
              <v-flex xs12 sm6>
                <label for="">都道府県</label>
                <v-text-field class="text__field" flat solo hide-details>{{
                  prefecture
                }}</v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="city__content">
              <v-flex>
                <label for="">市区町村</label>
                <v-text-field class="text__field" flat solo hide-details>{{
                  city
                }}</v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="building__content">
              <v-flex>
                <label for="">建物名・部屋番号</label>
                <v-text-field class="text__field" flat solo hide-details>{{
                  building
                }}</v-text-field>
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
    return {
      diplayAdress: true,
      zipCode: '',
      prefecture: '',
      city: '',
      building: ''
    }
  },
  computed: {}
}
</script>

<style lang="scss" scope>
.adress-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.adress-contents {
  margin: 10px 20px;
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
