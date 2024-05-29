<template>
  <div id="app">
    <router-view :items="items" @add-item="addItem" @toggle-bought="toggleBought" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Milch',
            amount: 1,
            unit: 'Liter',
            bought: false
          },
          {
            id: 2,
            name: 'Brot',
            amount: 2,
            unit: 'Stück',
            bought: false
          }
        ]
      }
    },
    methods: {
      addItem(newItem) {
        const newItemWithId = {
          ...newItem,
          id: this.items.length + 1,
          bought: false
        }
        this.items.push(newItemWithId)
      },
      toggleBought(itemId) {
        const item = this.items.find(item => item.id === itemId)
        if (item) {
          item.bought = !item.bought
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    background-color: antiquewhite;
    color: #2c3e50;
  }
</style>