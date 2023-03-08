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
    <tbody>
    <div class="container">
      <div class="row" >
        <div class="col-6">
          <RouterLink to="/film"><button class="filmB"><span class="material-symbols-outlined">movie</span>FILM</button></RouterLink>
        </div>
        <div class="col-6">
          <RouterLink to="/TVseries"><button class="serieTVB"><span class="material-symbols-outlined">tv</span>SERIES</button></RouterLink>
        </div>
      </div>
    </div>
  </tbody>
  </div>    
  <RouterView />
</template>
<style>
.filmB{
  border: 2px solid white;
  background-color: red;
  color: white;
  font-size: xx-large;
  font-weight: bold;
  width: 17rem;
  height: 15rem;
  border-radius: 20px;
  
}
.serieTVB{
  border: 2px solid;
  background-color: black;
  color: white;
  font-size: xx-large;
  font-weight: bold;
  width: 17rem;
  height: 15rem;
  border-radius: 20px;
  margin-left: 200px;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 0,
  'opsz' 48
}
</style>
