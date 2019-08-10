<template>
  <section v-if="loaded" class="wrapper">
    <Title></Title>
    <Name></Name>
    <NameKANA></NameKANA>
  </section>
</template>

<script>
import Title from '~/components/admin/Title.vue'
import Name from '~/components/admin/Name.vue'
import NameKANA from '~/components/admin/Name_KANA.vue'

export default {
  components: {
    Title,
    Name,
    NameKANA
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

.contents {
  background-color: #fff;
}

.text__field {
  border: solid 1px #d9d9d9;
}
</style>
