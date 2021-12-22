<template>
  <div class="error">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.error {
  min-width: 550px;
  border: 1px solid red;
  padding: 10px 0;
  text-align: center;
  border-radius: 5px;
  background-color: #efafaf;
  color: #f8ebeb;
  margin: 20px 0 -30px;
}
</style>