<template>
  <Loader v-if="loading"/>
  <Navbar/>
  <router-view/>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

export default {
  components: {Loader, Navbar},
  computed: {
    ...mapState({
      auth: state => state.user.isAuth,
      loading: state => state.isLoading
    })
  },
  methods: {
    ...mapActions({
      check: `user/check`
    })
  },
  mounted() {
    this.check()
  },
  watch: {
    auth() {
      const {push} = this.$router
      const {auth} = this
      if (auth)
        push('/tests')
      else
        push('/sign-in')
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
