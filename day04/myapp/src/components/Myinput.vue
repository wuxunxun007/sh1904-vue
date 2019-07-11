<template>
  <div class="myInput">
    <span v-show="required" style="color: red">*</span>
    <label>{{ label }}</label>
    <input type="text" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" />
    <span v-show="clearable">×</span>
    <span v-show="err !== ''">{{err}}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    err: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

