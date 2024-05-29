<template>
    <div>
      <h1>Neuen Artikel hinzufügen</h1>
      <form @submit.prevent="addItem">
        <input v-model="newItem" placeholder="Neuer Artikel" />
        <button type="submit">Hinzufügen</button>
      </form>
      <router-link to="/">Zurück zur Liste</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newItem: '',
      };
    },
    methods: {
      addItem() {
        if (this.newItem.trim() !== '') {
          this.$emit('add-item', this.newItem);
          this.newItem = '';
        }
      },
    },
  };
  </script>
  