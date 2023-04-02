<script>
import TVCard from '../components/TVCard.vue';
export default{
    data() {
      const lang = localStorage.getItem("lang") || "it";
        return {
            series: [],
            pages: 1,
            total: 20,
            lang: lang
        };
    },
    mounted() {
    },
    methods: {
        ReturnImage(serie) {
            return "https://image.tmdb.org/t/p/w500" + serie.backdrop_path;
        }
    },
    components: { TVCard }
}
</script>
<template>
  <br>
  <div style="background-image: linear-gradient(to left, black, lightslategray);margin-left: -350px;padding-right: 1450px;margin-right: -340px;text-align: center;font-family: cursive;height: auto;">
  <div class="container">
    <div class="row" v-for="pages in total"> 
        <TVCard :page="pages"></TVCard>
    </div>
  </div>
</div>
  </template>
<style>
.films {
  text-align: center;
}
.cardTV {
  border: 5px solid black;
  background-color: black;
  color: red;
  text-align: center;
  font-weight: bold; 
}
.btnCard{
  font-weight: bold;
   height: 42px;
   width: 422px;
}
.btnCard:hover{
  border: 1px solid red;
  color: white;
  background-color: red;
  font-weight: bold;
   height: 42px;
   width: 422px;
}
</style>





