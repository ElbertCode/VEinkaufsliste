<template>
  <div>
    <h1>Einkaufsliste</h1>
    <div>
      <ShoppingItem v-for="item in sortedItems" :key="item.id" :item="item" @toggle-bought="toggleBought" />
    </div>
    <router-link to="/new-item">
      <ActionButton>
        <IconAdd />
      </ActionButton>
    </router-link>

  </div>
</template>

<script>
  import ShoppingItem from '@/components/ShoppingItem.vue'
  import ActionButton from '@/components/ActionButton.vue'
  import IconAdd from "@/components/icons/IconAdd.vue"

  export default {
    name: 'ListView',
    props: ['items'],
    computed: {
      sortedItems() {
        return this.items.slice().sort((a, b) => a.bought - b.bought)
      }
    },
    methods: {
      toggleBought(itemId) {
        this.$emit('toggle-bought', itemId)
      }
    },
    components: {
      ShoppingItem,
      ActionButton,
      IconAdd
    }
  }
</script>