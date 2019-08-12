<template>
  <section v-if="formMail.displayMail">
    <v-card class="mail-wrapper">
      <div>
        <div class="mail">
          <span>メールアドレス</span>
        </div>
        <v-layout class="mail__content">
          <v-flex>
            <label for="">メールアドレス</label>
            <v-text-field class="text__field" flat solo hide-details>{{
              formMail.mailAddress
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
    return {}
  },
  computed: {
    formMail() {
      return this.$store.getters['form/getMailData']
    }
  }
}
</script>

<style lang="scss" scope>
.mail-wrapper {
  padding: 20px;
  border-radius: 5px;
}
.mail__content {
  margin: 10px 10%;
}
</style>
