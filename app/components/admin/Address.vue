<template>
  <section>
    <v-card class="address-wrapper">
      <div @click="adressSettingDialog = true">
        <div>
          <span>郵便番号</span>
        </div>
        <v-layout class="address-contents">
          <v-flex xs12 sm3 class="check-box">
            <v-checkbox
              v-model="formAddress.displayAddress"
              class="mx-2"
              color="blue"
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
            <v-layout class="zip-code__content">
              <v-flex xs12 sm6>
                <p v-show="formAddress.requiredAddress" class="required-text">
                  ※入力必須
                </p>
                <label for="">郵便番号</label>
                <v-text-field
                  :placeholder="formAddress.zipCodePlaceHolder"
                  class="text__field"
                  flat
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="prefecture__content">
              <v-flex xs12 sm6>
                <label for="">都道府県</label>
                <v-text-field
                  :placeholder="formAddress.prefecturePlaceHolder"
                  class="text__field"
                  flat
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="city__content">
              <v-flex>
                <label for="">市区町村</label>
                <v-text-field
                  class="text__field"
                  :placeholder="formAddress.cityPlaceHolder"
                  flat
                  solo
                  hide-details
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout class="building__content">
              <v-flex>
                <label for="">建物名・部屋番号</label>
                <v-text-field
                  class="text__field"
                  :placeholder="formAddress.buildingPlaceHolder"
                  flat
                  solo
                  hide-details
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-dialog v-model="adressSettingDialog" max-width="600px">
              <v-card>
                <v-card-title>
                  <span class="headline">名前</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm1>
                        <v-checkbox
                          v-model="formAddress.requiredAddress"
                          class="mx-2"
                          color="blue"
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm11 class="required-label">
                        <label>入力必須</label>
                      </v-flex>
                      <v-flex xs12>
                        <label>郵便番号（プレースホルダー）</label>
                        <v-text-field
                          v-model="formAddress.zipCodePlaceHolder"
                          class="text__field"
                          flat
                          solo
                          hide-details
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <label>都道府県（プレースホルダー）</label>
                        <v-text-field
                          v-model="formAddress.prefecturePlaceHolder"
                          class="text__field"
                          flat
                          solo
                          hide-details
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <label>市区町村（プレースホルダー）</label>
                        <v-text-field
                          v-model="formAddress.cityPlaceHolder"
                          class="text__field"
                          flat
                          solo
                          hide-details
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <label>建物・部屋番号（プレースホルダー）</label>
                        <v-text-field
                          v-model="formAddress.buildingPlaceHolder"
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
                    @click="adressSettingDialog = false"
                    >閉じる</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      adressSettingDialog: false
    }
  },
  computed: {
    formAddress() {
      return this.$store.getters['form/getAddressData']
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
