<template>
  <div class="input-template">
    <span v-if="!label"><font-awesome-icon :icon="icon" size="2x"/></span>
    <label v-else :for="name">{{ label }}</label>
    <input
        :id="name"
        :name="name"
        :type="type"
        :model-value="modelValue"
        :placeholder="placeholder"
        @input="onChangeHandler"
        maxlength="40">
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
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: [String, Number],
      required: false
    }
  },
  methods: {
    onChangeHandler({target}) {
      this.$emit("update:modelValue", target.value)
    }
  }
}
</script>

<style scoped>
.input-template {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  border-radius: 5px;
  height: 40px;
  margin: 5px;
  color: teal;
  overflow: hidden;
}

.input-template span {
  text-align: center;
  padding: 2px;
}

.input-template label {
  text-align: center;
  padding: 2px;
  margin: 0 3px;
}

.input-template input {
  outline: none;
  border: none;
  border-left: 1px solid teal;
  height: 100%;
  padding-left: 5px;
  color: teal;
  font-size: 16px;
}

</style>