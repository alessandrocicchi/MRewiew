<script>
import Card from '../components/Card.vue';
export default{
    data() {
      const lang = localStorage.getItem("lang") || "it";
        return {
            films: [],
            total: 50,
            lang: lang,
        }
    },
    methods: {
        
    },
  computed: {
    filteredFilms(){
      this.CreatePage()
      return this.films.filter(film => film.title.includes(this.searchName))
    }
  },
    components: { Card }
}
</script>
<template>
  <br>
  <div class="container tabella" v-for="pages in total">
    <div class="row">
        <Card :page="pages"></Card>
    </div>
  </div>
</template>
<style>
.tabella{
  text-align: center;
  font-family: cursive;
}
.films {
  text-align: center;
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





