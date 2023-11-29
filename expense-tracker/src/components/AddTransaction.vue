<script setup>
import { ref } from 'vue';
import {useToast} from 'vue-toastification';

const text = ref('');
const amount = ref('');

let toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onsubmit = () => {
  if(!text.value || !amount.value){
    toast.error('All fields must be filled.');
    return;
  }

  const transactionData = {
  text: text.value,
  amount: parseFloat(amount.value)
  }

  emit('transactionSubmitted', transactionData);

  text.value = '';
  amount.value = '';
}

</script>

<template>
  <div>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onsubmit">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" v-model="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="text" v-model="amount" id="amount" placeholder="Enter amount..." />
        </div>
      <button class="btn">Add transaction</button>
    </form>
  </div>
</template>


<style lang="scss" scoped>

</style>