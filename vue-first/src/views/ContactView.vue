<script setup>
import { useStorage } from '@/composables/useStorage'

let name = useStorage('name', 'good');

</script>

<template lang="">

  <label>Name</label>
  <input type="text" v-model="name" placeholder="name">

</template>

<style lang="">

</style>