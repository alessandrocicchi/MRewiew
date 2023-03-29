<script>
import TVCard from '../components/TVCard.vue';
export default{
    data() {
      const lang = localStorage.getItem("lang") || "it";
        return {
            series: [],
            pages: 1,
            total: 50,
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
<div v-for="pages in total">
  <div class="container tabella">
    <div class="row" >
      <div class="col-12">   
        <TVCard :page="pages"></TVCard>
      </div>
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
  color: white;
  background-color: red;
  font-weight: bold;
   height: 42px;
   width: 422px;
}
</style>





