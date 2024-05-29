<template>
  <div class="shopping-item" :class="{ bought: item.bought }">
    <md-checkbox :checked="item.bought" @change="toggleBought" />
    <div class="item-details">
      <span>{{ item.amount }} {{ item.unit }} {{ item.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingItem',
    props: ['item'],
    methods: {
      toggleBought() {
        this.$emit('toggle-bought', this.item.id)
      }
    }
  }
</script>

<style scoped>
  .shopping-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .shopping-item.bought {
    text-decoration: line-through;
    color: grey;
    background-color: #f9f9f9;
  }

  .item-details {
    flex-grow: 1;
    margin-left: 10px;
  }
</style>