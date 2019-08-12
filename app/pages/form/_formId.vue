<template>
  <section v-if="loaded" class="form-wrapper">
    <FormTitle class="form-title"></FormTitle>
    <div class="form-content">
      <Name class="content"></Name>
      <NameKana class="content"></NameKana>
      <Address class="content"></Address>
      <Telephone class="content"></Telephone>
      <Mail class="content"></Mail>
      <Finish class="content"></Finish>
    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'

import FormTitle from '~/components/form/FormTitle.vue'
import Name from '~/components/form/Name.vue'
import NameKana from '~/components/form/NameKana.vue'
import Address from '~/components/form/Address.vue'
import Telephone from '~/components/form/Telephone.vue'
import Mail from '~/components/form/Mail.vue'
import Finish from '~/components/form/Finish.vue'

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
      loaded: false
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
.form-wrapper {
  width: 100%;
  height: 100%;
  background-color: #e2e2e2;
}

.form-title {
  margin: 30px 0;
}

.form-content {
  padding: 0 50px 50px 50px;
  min-width: 600px;
  max-width: 1000px;
  margin: auto;
}

.content {
  margin: 50px 0 0 0;
}

.text__field {
  border: solid 1px #d9d9d9;
}

.save-content {
  margin: 20px 0 0 0;
  text-align: center;
}
.save-btn {
  width: 200px;
  height: 50px;
  border-radius: 10px;
}
</style>
