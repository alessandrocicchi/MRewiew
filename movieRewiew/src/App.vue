<script setup>
import {RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'
import Container from './views/Container.vue'
</script>

<template>
  <div>
    <div>
      <Navbar />
    </div>
    <tbody>
    <div>
      <Container />
    </div>
  </tbody>
  </div>    
  <RouterView />
</template>

<style>

</style>
