<script setup>
import {ref} from 'vue'
import {useFlash} from '../composables/useFlash'

let pageName = ref('Contact page');
let {flash} = useFlash();

</script>

<template lang="">

  <p>{{ pageName }}</p>
  <button @click="flash('Contact page','Hey from contact page????????', 'info')">Click for alert</button>

</template>

<style lang="">
  
</style>