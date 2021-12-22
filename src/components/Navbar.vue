<template>
  <div id="nav" v-bind:style="{'background-color': auth ? 'teal': 'white'}">
    <div class="nav-logo">
      <router-link v-if="!auth" to="/">AMP</router-link>
      <router-link v-else to="/tests">AMP</router-link>
    </div>
    <div class="nav-menu">
      <div v-if="!auth">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/sign-in">Sign In</router-link>
      </div>
      <div v-if="auth">
        <router-link to="/tests">Tests</router-link>
        <router-link to="/create-test">Create Tests</router-link>
        <router-link @click="logout" to="/sign-in">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState({
      auth: state => state.user.isAuth
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>

<style scoped>
#nav {
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid teal;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  margin: 0 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
  text-decoration: underline;

}

.nav-menu {
  margin-left: auto;
}

.nav-menu div a {
  color: lightgray;
}

.nav-logo a {
  text-decoration: none !important;
  color: black !important;
  font-size: 25px;
}
</style>