<template>
  <div class="select-box">
    <div class="select-title">
      <h4>{{ text }}</h4>
      <Button @click="showValues" name="btn-show"><span>{{ selectedValue }}</span>
        <font-awesome-icon :icon="['far', 'arrow-alt-circle-down']"/>
      </Button>
      <div class="select-list" v-if="show">
        <p v-for="value in values" @click="choseValue">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Select",
  components: {Button},
  props: {
    values: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  data: () => ({
    show: false,
    selectedValue: ''
  }),
  methods: {
    choseValue({target}) {
      this.selectedValue = target.textContent
      this.show = false
      this.$emit("update:modelValue", this.selectedValue)
    },
    showValues() {
      this.show = !this.show
    }
  },
  mounted() {
    this.selectedValue = this.values[0]
  }
}
</script>

<style scoped>

.select-title {
  position: relative;
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  margin-left: 10px;
  white-space: pre;
  width: min-content;
}

.select-title button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
}

.select-title button span:first-letter {
  text-transform: uppercase;
}

.select-title button svg {
  margin-left: 5px;
}

.select-list {
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
  z-index: 1000;
  border: 1px solid teal;
  border-radius: 5px;
  overflow: hidden;
}

.select-list p {
  background-color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-list p:hover {
  background-color: #81bdbd;
}

.select-list p:not(.select-list p:last-child) {
  border-bottom: 1px solid teal;
}

.select-list p:first-letter {
  text-transform: uppercase;
}
</style>