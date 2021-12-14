<template>
  <div class="input-template">
    <span v-if="!label"><font-awesome-icon :icon="icon"/></span>
    <label v-else :for="name">{{ label }}</label>
    <input :id="name" :name="name" :type="type" :value="value" :placeholder="placeholder">
    <button @click="getData(iconArr)">get</button>
  </div>
</template>

<script>

export default {
  name: "Input",
  props: {
    icon: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  data: () => {
    return {
      iconArr: ''
    }
  },
  methods: {
    getData(data) {
      console.log(this)
      console.log(data, typeof data)
    }
  }
}
</script>

<style scoped>
.input-template {
  display: grid;
  grid-template-columns: 20px 1fr;
}
</style>