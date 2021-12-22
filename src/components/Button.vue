<template>
    <button :id="name" class="btn-tmp" :class="{className}" :name="name">
      <slot/>
    </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.btn-tmp {
  padding: 5px 20px;
  text-align: center;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.outlined {
  background-color: snow;
  border: 1px solid teal;
  color: teal;
}

.primary {
  background-color: teal;
  border: 1px solid teal;
  color: snow;
}
</style>