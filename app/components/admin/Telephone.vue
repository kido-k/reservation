<template>
  <section>
    <v-card class="telephone-wrapper">
      <div>
        <div class="telephone">
          <span>電話番号</span>
        </div>
        <v-layout xs12 class="telephone__content">
          <v-flex xs12 sm3 class="check-box">
            <v-checkbox
              v-model="displayTelephone"
              class="mx-2"
              color="blue"
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
            <label for="">電話番号</label>
            <v-text-field class="text__field" flat solo hide-details>{{
              telephone
            }}</v-text-field>
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
      displayTelephone: true,
      telephone: ''
    }
  },
  computed: {}
}
</script>

<style lang="scss" scope>
.telephone-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.check-box {
}
.telephone__content {
  margin: 10px 20px;
}
</style>
