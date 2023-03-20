<script setup>
import {RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'
</script>
<template>
  <div style="font-family: cursive;">
    <div>
      <Navbar />
    </div>
    <br>
    <br>
    <br>
  </div>    
  <RouterView />
</template>
<style>
</style>
