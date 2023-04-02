<script>
import Card from '../components/Card.vue';
export default{
    data() {
      const lang = localStorage.getItem("lang") || "it";
        return {
            films: [],
            total: 10,
            lang: lang,
        }
    },
    props:{
      type:{
        type: Array
      }
    },
    components: { Card }
}
</script>
<template>
<div style="background-image: linear-gradient(to left, black, lightslategray);margin-left: -960px;padding-right: 1000px;margin-right: -340px;text-align: center;font-family: cursive;">
  <div class="container">
    <br>
    <br>
    <br>
    <div class="row" v-for="pages in total" style="text-align: center;">
        <Card :page="pages"></Card>
    </div>
  </div>
</div>
</template>
<style>

.films {
  text-align: center;
}
.btnCard{
  font-weight: bold;
   height: 42px;
   width: 2000px;
}
.btnCard:hover{
  color: white;
  background-color: red;
  font-weight: bold;
   height: 42px;
   width: 2000px;
}
</style>





