<template>
  <div>
    <h1>Neues Element hinzufügen</h1>
    <form @submit.prevent="addItem">

      <!-- <TextField label="Name" v-model="newItemName" :required="true" /> -->
      <TextField variableName="newItemName" label="Name" :required="true" @input-change="updateValue" />
      <TextField variableName="newItemAmount" label="Anzahl" type="number" :required="true"
        @input-change="updateValue" />
      <TextField variableName="newItemUnit" label="Einheit" @input-change="updateValue" />
      <!-- <TextField label="Menge" value="1" v-model="newItemAmount" :required="true" type="number" /> -->
      <!-- <TextField label="Einheit" v-model="newItemUnit" /> -->
      <!-- <TextField label="Name" v-model="newItemName" type="number" required />
      <p>Input Value: {{ textValue }}</p> -->
      <!-- <input v-model="newItemName" label="Name" required /> -->
      <!-- <input v-model="newItemAmount" placeholder="Menge" type="number" required>
      <input v-model="newItemAmount" label="Menge" type="number" value="1" required />
      <input v-model="newItemUnit" placeholder="Einheit" /> -->
      <div type="submit">
        <!-- <md-fab>
          <IconCheck />
        </md-fab> -->
        <ActionButton>
          <IconCheck />
        </ActionButton>
      </div>
    </form>


    <!-- <router-link to="/">
      <md-fab label="Hinzufügen" style="position: fixed; bottom: 16px; right: 16px" />
    </router-link> -->
  </div>
</template>

<script>
  import ActionButton from '@/components/ActionButton.vue'
  import TextField from '@/components/TextField.vue'
  import IconCheck from "@/components/icons/IconCheck.vue"

  export default {
    name: 'NewItem',
    data() {
      return {
        newItemName: '',
        newItemAmount: 1,
        newItemUnit: ''
      }
    },
    components: {
      ActionButton,
      IconCheck,
      TextField
    },
    methods: {
      addItem() {
        console.log("HALLO", this.newItemName, this.newItemAmount, this.newItemUnit)
        const newItem = {
          name: this.newItemName,
          amount: this.newItemAmount,
          unit: this.newItemUnit
        }
        this.$emit('add-item', newItem)
        this.newItemName = ''
        this.newItemAmount = 1
        this.newItemUnit = ''
        this.$router.push('/')
      },
      submitForm() {
        this.addItem();
      },
      updateValue({ name, value }) {
        this[name] = value;
      }
    }
  }


</script>

<style scoped>
  .fab {
    --_size: 2rem;

    padding: calc(var(--_size) / 2);
    border-radius: var(--radius-round);
    aspect-ratio: 1;
    box-shadow: var(--shadow-4);

    position: fixed;
    bottom: 16px;
    right: 16px
  }
</style>