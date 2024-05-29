<template>
  <div class="fab-container">
    <button class="fab" @click="onClick">
      <span class="fab-icon">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
  import IconAdd from "@/components/icons/IconAdd.vue"

  export default {
    name: 'ActionButton',
    methods: {
      onClick() {
        this.$emit('click');
      }
    }
  }
</script>

<style scoped>
  .fab-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  .fab {
    width: 56px;
    height: 56px;
    border-radius: 30%;
    background-color: #6200ea;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .fab:hover {
    color: #3faf48;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }

  .fab:active {
    background-color: #6200ea;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .fab-icon {
    display: inline-block;
    fill: white;
    color: white;
    line-height: 1;
  }
</style>