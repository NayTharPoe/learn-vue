<script setup>
import {ref} from 'vue'
import {useFlash} from '../composables/useFlash'

let pageName = ref('About page');
let {flash} = useFlash();

</script>


<template>
  <div class="about">
    <h1>{{message}}</h1>
    <button @click="flash('About page','hey it is from about page?????', 'success')">Click for alert</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
