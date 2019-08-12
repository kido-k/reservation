<template>
  <section>
    <v-card class="name-wrapper">
      <div>
        <span>名前（カナ）</span>
      </div>
      <v-layout class="name__content">
        <v-flex xs12 sm3 class="check-box">
          <v-checkbox
            v-model="formNameKana.displayNameKana"
            class="mx-2"
            color="blue"
          ></v-checkbox>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout>
            <div class="name__input" @click="nameSettingDialog = true">
              <label for="">セイ</label>
              <v-text-field
                class="text__field"
                :placeholder="formNameKana.familyNamePlaceHolder"
                flat
                solo
                hide-details
                >{{ formNameKana.familyNameValue }}</v-text-field
              >
              <p v-show="formNameKana.familyNameRequired" class="required-text">
                ※入力必須
              </p>
            </div>
            <div class="name-margin"></div>
            <div class="name__input" @click="nameSettingDialog = true">
              <label for="">メイ</label>
              <v-text-field
                class="text__field"
                :placeholder="formNameKana.firstNamePlaceHolder"
                flat
                solo
                hide-details
                >{{ formNameKana.firstNameValue }}</v-text-field
              >
              <p v-show="formNameKana.familyNameRequired" class="required-text">
                ※入力必須
              </p>
            </div>
          </v-layout>
        </v-flex>
        <v-dialog v-model="nameSettingDialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">名前</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label>セイ（プレースホルダー）</label>
                    <v-text-field
                      v-model="formNameKana.familyNamePlaceHolder"
                      class="text__field"
                      flat
                      solo
                      hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm1>
                    <v-checkbox
                      v-model="formNameKana.familyNameRequired"
                      class="mx-2"
                      color="blue"
                    ></v-checkbox>
                  </v-flex>
                  <v-flex xs12 sm11>
                    <label>入力必須</label>
                  </v-flex>
                  <v-flex xs12>
                    <label>メイ（プレースホルダー）</label>
                    <v-text-field
                      v-model="formNameKana.firstNamePlaceHolder"
                      class="text__field"
                      flat
                      solo
                      hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm1>
                    <v-checkbox
                      v-model="formNameKana.firstNameRequired"
                      class="mx-2"
                      color="blue"
                    ></v-checkbox>
                  </v-flex>
                  <v-flex xs12 sm11>
                    <label>入力必須</label>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue" dark text @click="nameSettingDialog = false"
                >閉じる</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nameSettingDialog: false
    }
  },
  computed: {
    formNameKana() {
      return this.$store.getters['form/getNameKanaData']
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
.required-text {
  color: #ffae34;
  font-size: 12px;
}
</style>
