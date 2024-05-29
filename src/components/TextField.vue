<template>
  <div class="text-field">
    <rect margin="8px">
      <label class="floating-label">{{ label }}</label>
      <input class="text-field__input" :placeholder="placeholder" :type="type" :required="required" v-model="inputValue"
        @input="updateParent" />
      <div class="line-ripple"></div>
    </rect>
  </div>
</template>

<script>
  export default {
    name: 'TextField',
    props: {
      variableName: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      updateParent() {
        this.$emit('input-change', { name: this.variableName, value: this.inputValue });
      }
    }
  }
</script>

<style scoped>
  .text-field {
    position: relative;
    font-size: 16px;
    line-height: 1.5;
  }

  .text-field__input {
    width: 100%;
    padding: 16px 0 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    font-size: 16px;
    line-height: 1.5;
  }

  .text-field__input:focus {
    border-bottom: 2px solid #6200ee;
  }

  .floating-label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: #757575;
    pointer-events: none;
    transform-origin: left top;
    transition: transform 0.2s, color 0.2s;
  }

  .text-field__input:focus+.floating-label,
  .text-field__input:not(:placeholder-shown)+.floating-label {
    transform: translateY(-20px) scale(0.75);
    color: #6200ee;
  }

  .line-ripple {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #6200ee;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  .text-field__input:focus~.line-ripple {
    transform: scaleX(1);
  }

  .text-field-helper-text {
    color: red;
    font-size: 12px;
    margin-top: 4px;
  }

  .text-field--invalid .text-field__input {
    border-bottom-color: red;
  }

  .text-field--invalid .floating-label {
    color: red;
  }
</style>