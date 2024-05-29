<template>
    <div>
      <h1>Einkaufsliste</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
          <button @click="removeItem(index)">Löschen</button>
        </li>
      </ul>
      <router-link to="/add-item">Neuen Artikel hinzufügen</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: Array,
    },
    methods: {
      removeItem(index) {
        this.$emit('remove-item', index);
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    margin-left: 10px;
  }
  </style>
  