<template>
  <section>
    <v-card class="name-wrapper">
      <div>
        <span>名前</span>
      </div>
      <v-layout class="name-input-field">
        <v-flex xs12 sm6 md3 class="family-name">
          <v-text-field
            class="text__field"
            :placeholder="familyNamePlaceHolder"
            flat
            solo
            hide-details
            >{{ familyNameValue }}</v-text-field
          >
        </v-flex>
        <v-flex xs12 sm6 md3 class="first-name">
          <v-text-field
            class="text__field"
            :placeholder="firstNamePlaceHolder"
            flat
            solo
            hide-details
            >{{ firstNameValue }}</v-text-field
          >
        </v-flex>
      </v-layout>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      familyNameValue: '',
      familyNamePlaceHolder: '田中',
      firstNameValue: '',
      firstNamePlaceHolder: '太郎'
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
.name-input-field {
  justify-content: center;
}
.family-name {
  margin: 10px 20px;
}
.first-name {
  margin: 10px 20px;
}
.text__field {
  border: solid 1px #d9d9d9;
}
</style>
