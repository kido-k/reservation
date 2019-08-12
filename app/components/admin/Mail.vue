<template>
  <section>
    <v-card class="mail-wrapper">
      <div @click="mailSettingDialog = true">
        <div class="mail">
          <span>メールアドレス</span>
        </div>
        <v-layout class="mail__content">
          <v-flex xs12 sm3 class="check-box">
            <v-checkbox
              v-model="formMail.displayMail"
              class="mx-2"
              color="blue"
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
            <label for="">メールアドレス</label>
            <v-text-field
              class="text__field"
              :placeholder="formMail.mailAddressPlaceHolder"
              flat
              solo
              hide-details
            ></v-text-field>
            <p v-show="formMail.requiredMail" class="required-text">
              ※入力必須
            </p>
          </v-flex>
          <v-dialog v-model="mailSettingDialog" max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">メールアドレス</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm1>
                      <v-checkbox
                        v-model="formMail.requiredMail"
                        class="mx-2"
                        color="blue"
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm11 class="required-label">
                      <label>入力必須</label>
                    </v-flex>
                    <v-flex xs12>
                      <label>メールアドレス（プレースホルダー）</label>
                      <v-text-field
                        v-model="formMail.mailAddressPlaceHolder"
                        class="text__field"
                        flat
                        solo
                        hide-details
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" dark text @click="mailSettingDialog = false"
                  >閉じる</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mailSettingDialog: false
    }
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
.mail {
}
.mail__content {
  margin: 10px 20px;
}
</style>
