<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div>
    <h1>Your Balance</h1>
    <h4 id="balance">${{ total }}</h4>
  </div>
</template>

<style lang="scss" scoped>

</style>