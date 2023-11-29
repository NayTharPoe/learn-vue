<script setup>
import { defineProps } from 'vue';

const emit = defineEmits(['transactionDeleted'])

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const transactionDelete = (id) => {
  emit('transactionDeleted', id)
}

</script>

<template>
  <div>
    <h3>History</h3>
    <ul id="list" class="list">
      <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
        {{transaction.text}} <span>${{transaction.amount}}</span><button class="delete-btn" @click="transactionDelete(transaction.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>