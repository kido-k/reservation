<template>
  <section v-if="loaded" class="wrapper">
    <Title class="content"></Title>
    <Name class="content"></Name>
    <NameKana class="content"></NameKana>
    <Adress class="content"></Adress>
    <Telephone class="content"></Telephone>
    <MailAdress class="content"></MailAdress>
  </section>
</template>

<script>
import Title from '~/components/admin/Title.vue'
import Name from '~/components/admin/Name.vue'
import NameKana from '~/components/admin/Name_Kana.vue'
import Adress from '~/components/admin/Adress.vue'
import Telephone from '~/components/admin/Telephone.vue'
import MailAdress from '~/components/admin/MailAdress.vue'

export default {
  components: {
    Title,
    Name,
    NameKana,
    Adress,
    Telephone,
    MailAdress
  },
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuth) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('login')
      }
      this.loaded = true
    }, 0)
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
