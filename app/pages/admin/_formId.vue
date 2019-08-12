<template>
  <section v-if="loaded" class="wrapper">
    <FormTitle class="content"></FormTitle>
    <Name class="content"></Name>
    <NameKana class="content"></NameKana>
    <Address class="content"></Address>
    <Telephone class="content"></Telephone>
    <Mail class="content"></Mail>
    <Finish class="content"></Finish>
    <v-btn color="blue" dark @click="saveFormSetting">保存</v-btn>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'

import FormTitle from '~/components/admin/FormTitle.vue'
import Name from '~/components/admin/Name.vue'
import NameKana from '~/components/admin/NameKana.vue'
import Address from '~/components/admin/Address.vue'
import Telephone from '~/components/admin/Telephone.vue'
import Mail from '~/components/admin/Mail.vue'
import Finish from '~/components/admin/Finish.vue'

export default {
  components: {
    FormTitle,
    Name,
    NameKana,
    Address,
    Telephone,
    Mail,
    Finish
  },
  data() {
    return {
      loaded: false,
      formIdddddd: ''
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
    userData() {
      return this.$store.getters.userData
    },
    formId() {
      return this.$store.getters['form/getFormId']
    },
    formData() {
      return this.$store.getters['form/getFormData']
    }
  },
  asyncData({ store, params }) {
    store.commit('form/setFormId', params.formId)
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuth) {
        this.$router.push('login')
      }
      this.setFormData()
      this.loaded = true
    }, 0)
  },
  methods: {
    async setFormData() {
      const db = firebase.firestore()
      const formData = await db.doc(
        `users/${this.userData.uid}/forms/${this.formId}`
      )
      await formData.onSnapshot(snapshot => {
        this.$store.commit('form/setFormData', snapshot.data())
      })
    },
    async saveFormSetting() {
      const db = firebase.firestore()
      const formData = await db.doc(
        `users/${this.userData.uid}/forms/${this.formId}`
      )
      await formData.update({
        content: this.formData
      })
    }
  }
}
</script>

<style lang="scss" scope>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: #e7f9f5;
}

.content {
  margin: 50px 0 0 0;
}

.text__field {
  border: solid 1px #d9d9d9;
}
</style>
