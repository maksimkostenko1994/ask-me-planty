<template>
  <div class="auth-box">
    <form class="auth-form" @submit.prevent>
      <Input v-bind:icon="['fas','at']" name="email" type="text" :value="value" placeholder="Enter email..."/>
      <Input v-bind:icon="['far','envelope']" name="password" type="text" :value="value" placeholder="Enter password..."/>
    </form>
  </div>
</template>

<script>
import Input from "@/components/Input";

export default {
  name: "SignIn",
  components: {Input},
  data: () => {
    return {
      value: '',
      icon: ''
    }
  }
}
</script>

<style scoped>
.auth-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-form {
  border: 1px solid teal;
}
</style>