<template>
  <div class="auth-box">
    <h1 v-if="$route.path === '/sign-in'" class="form-title">Login</h1>
    <h1 v-else-if="$route.path === '/sign-up'" class="form-title">Registration</h1>
    <Error v-if="error" v-bind:error="error.message"/>
    <form class="auth-form" @submit.prevent>
      <div v-if="$route.path === '/sign-up'" class="full-name">
        <Input v-bind:icon="['fas','user']" name="first_name" type="text" v-model="first_name"
               placeholder="Enter first name..." :model-value="first_name"/>
        <Input v-bind:icon="['far','user']" name="last_name" type="text" v-model="last_name" :model-value="last_name"
               placeholder="Enter last name..."/>
      </div>
      <Input v-bind:icon="['fas','at']" name="email" type="text" v-model="email" :model-value="email"
             placeholder="Enter email..."/>
      <Input v-bind:icon="['far','envelope']" name="password" type="text" v-model="password" :model-value="password"
             placeholder="Enter password..."/>
      <div v-if="$route.path === '/sign-in'" class="form-footer">
        <p>Don't have account?
          <router-link to="/sign-up">Join us!</router-link>
        </p>
        <Button name="sign_in" @click="login({email, password})" class-name="primary">Sign In</Button>
      </div>
      <div v-else-if="$route.path === '/sign-up'" class="form-footer">
        <p>Already have account?
          <router-link to="/sign-in">Sign in!</router-link>
        </p>
        <Button
            @click="registration({full_name: `${first_name} ${last_name}`, email, password})"
            name="sign_up" class-name="primary">
          Sign Up
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";

import {mapState, mapMutations} from "vuex"
import Error from "@/components/Error";

export default {
  name: "SignIn",
  components: {Error, Button, Input},
  data: () => ({
      first_name: '',
      last_name: '',
      password: '',
      email: ''
  }),
  methods: {
    registration(user) {
      this.$store.dispatch('user/registration', user)
    },
    login(user) {
      this.$store.dispatch('user/login', user)
    },
    ...mapMutations({
      setError: 'user/setError'
    })
  },
  computed: {
    ...mapState({
      error: state => state.user.error
    })
  },
  watch: {
    $route() {
      this.setError(null)
    }
  }
}
</script>

<style scoped>
.auth-box {
  width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
}

.auth-form {
  border-top: 1px solid teal;
  margin-top: 40px;
  width: 100%;
  padding: 15px 10px;
}

.form-title {
  color: teal;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}

.form-footer p {
  color: teal;
}

.form-footer p a {
  color: #a2a1a1;
}
</style>