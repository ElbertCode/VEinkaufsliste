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
  html,
  body {
    background-color: antiquewhite;
    margin: 0;
    height: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>