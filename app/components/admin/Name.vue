<template>
  <section>
    <v-card class="name-wrapper">
      <div>
        <span>名前</span>
      </div>
      <v-layout class="name__content">
        <v-flex xs12 sm3 class="check-box">
          <v-checkbox
            v-model="formName.displayName"
            class="mx-2"
            color="blue"
          ></v-checkbox>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout>
            <div class="name__input" @click="nameSettingDialog = true">
              <label>{{ formName.familyNameLabel }}</label>
              <v-text-field
                class="text__field"
                :placeholder="formName.familyNamePlaceHolder"
                flat
                solo
                hide-details
                readonly
              ></v-text-field>
              <p v-show="formName.familyNameRequired" class="required-text">
                ※入力必須
              </p>
            </div>
            <div class="name-margin"></div>
            <div class="name__input" @click="nameSettingDialog = true">
              <label>{{ formName.firstNameLabel }}</label>
              <v-text-field
                class="text__field"
                :placeholder="formName.firstNamePlaceHolder"
                flat
                solo
                hide-details
                readonly
              ></v-text-field>
              <p v-show="formName.firstNameRequired" class="required-text">
                ※入力必須
              </p>
            </div>
            <v-dialog v-model="nameSettingDialog" max-width="600px">
              <v-card>
                <v-card-title>
                  <span class="headline">名前</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <label>姓（プレースホルダー）</label>
                        <v-text-field
                          v-model="formName.familyNamePlaceHolder"
                          class="text__field"
                          flat
                          solo
                          hide-details
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm1>
                        <v-checkbox
                          v-model="formName.familyNameRequired"
                          class="mx-2"
                          color="blue"
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm11 class="required-label">
                        <label>入力必須</label>
                      </v-flex>
                      <v-flex xs12>
                        <label>名（プレースホルダー）</label>
                        <v-text-field
                          v-model="formName.firstNamePlaceHolder"
                          class="text__field"
                          flat
                          solo
                          hide-details
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm1>
                        <v-checkbox
                          v-model="formName.firstNameRequired"
                          class="mx-2"
                          color="blue"
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm11 class="required-label">
                        <label>入力必須</label>
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
                    @click="nameSettingDialog = false"
                    >閉じる</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-flex>
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
    formName() {
      return this.$store.getters['form/getNameData']
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
.name__input {
  cursor: pointer !important;
}
.text__field {
  border: solid 1px #d9d9d9;
}
.required-text {
  color: #ffae34;
  font-size: 12px;
}
.required-label {
  padding-top: 26px !important;
}
</style>
