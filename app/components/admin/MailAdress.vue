<template>
  <section>
    <v-card class="mail-wrapper">
      <div>
        <div class="mail">
          <span>メールアドレス</span>
        </div>
        <v-layout class="mail__content">
          <v-flex xs12 sm3 class="check-box">
            <v-checkbox
              v-model="diplayMail"
              class="mx-2"
              color="blue"
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
            <label for="">メールアドレス</label>
            <v-text-field class="text__field" flat solo hide-details>{{
              mailAdress
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
      diplayMail: true,
      mailAdress: ''
    }
  },
  computed: {}
}
</script>

<style lang="scss" scope>
.mail-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.mail {
}
.mail__content {
  margin: 10px 20px;
}
</style>
