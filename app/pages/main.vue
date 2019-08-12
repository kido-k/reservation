<template>
  <section class="login-form">
    <div v-if="loaded">
      <div class="form-list">
        <v-card class="form-content" @click="addFormData">
          <v-card-title>新しいイベントを追加＋</v-card-title>
        </v-card>
        <div v-for="(form, index) in formList" :key="index">
          <v-card class="form-content">
            <v-card-title>{{ form.content.main.title }}</v-card-title>
            <v-card-text>{{ form.content.main.detail }}</v-card-text>
            <v-card-actions>
              <v-btn text @click="moveEditForm(form.id)">編集</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import formFormat from '~/assets/const/formFormat'

export default {
  data() {
    return {
      loaded: false,
      formList: []
    }
  },
  computed: {
    userData() {
      return this.$store.getters.userData
    },
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuth) {
        this.$router.push('login')
      }
      this.setFormData()
    }, 0)
  },

  methods: {
    async setFormData() {
      const db = firebase.firestore()
      const userForms = await db
        .collection('users')
        .doc(this.userData.uid)
        .collection('forms')

      await userForms.onSnapshot(snapshot => {
        if (snapshot.size > 0) {
          snapshot.forEach(doc => {
            if (doc.exists) {
              const formData = doc.data()
              formData.id = doc.id
              this.formList.push(formData)
            }
          })
        }
      })
      this.loaded = true
    },

    async addFormData() {
      const db = firebase.firestore()
      const userForms = await db
        .collection('users')
        .doc(this.userData.uid)
        .collection('forms')

      userForms
        .add({
          content: formFormat,
          createdAt: new Date()
        })
        .then(res => {
          this.moveEditForm(res.id)
          console.log(res)
        })
        .catch(err => {
          console.error(err)
          throw err
        })
    },
    moveEditForm(formId) {
      this.$router.push('/admin/' + formId)
    }
  }
}
</script>

<style lang="scss" scope>
.form-list {
  display: flex;
}
.form-content {
  width: 200px;
  height: 200px;
  margin: 20px;
}
</style>
