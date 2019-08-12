<template>
  <section>
    <v-card class="telephone-wrapper">
      <div @click="telephoneSettingDialog = true">
        <div class="telephone">
          <span>電話番号</span>
        </div>
        <v-layout xs12 class="telephone__content">
          <v-flex xs12 sm3 class="check-box">
            <v-checkbox
              v-model="formTelephone.displayTelephone"
              class="mx-2"
              color="blue"
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
            <label for="">電話番号</label>
            <v-text-field
              :placeholder="formTelephone.telephonePlaceHolder"
              class="text__field"
              flat
              solo
              hide-details
              readonly
            ></v-text-field>
            <p v-show="formTelephone.requiredTelephone" class="required-text">
              ※入力必須
            </p>
          </v-flex>
          <v-dialog v-model="telephoneSettingDialog" max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">電話番号</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm1>
                      <v-checkbox
                        v-model="formTelephone.requiredTelephone"
                        class="mx-2"
                        color="blue"
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm11 class="required-label">
                      <label>入力必須</label>
                    </v-flex>
                    <v-flex xs12>
                      <label>電話番号（プレースホルダー）</label>
                      <v-text-field
                        v-model="formTelephone.telephonePlaceHolder"
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
                <v-btn
                  color="blue"
                  dark
                  text
                  @click="telephoneSettingDialog = false"
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
      telephoneSettingDialog: false
    }
  },
  computed: {
    formTelephone() {
      return this.$store.getters['form/getTelephoneData']
    }
  }
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
