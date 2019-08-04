<template>
  <section class="login-form">
    <div v-if="isAuth">
      {{ userData.email }}でログイン中です<br />
      <button @click="logout">ログアウト</button><br />
      <a href="/main">メンバーページへ</a>
    </div>
    <form v-else>
      <v-text-field
        v-model="email"
        label="メールアドレス"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :type="'password'"
        label="パスワード"
        required
      ></v-text-field>
      <v-btn @click="login">ログイン</v-btn>
    </form>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: '',
      password: ''
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
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('setUser', user)
    })
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/main')
        })
        .catch(error => {
          alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('setUser', null)
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<style lang="scss" scope>
.login-form {
  width: 50%;
  margin: 50px 0 0 25%;
  text-align: center;
}
</style>
