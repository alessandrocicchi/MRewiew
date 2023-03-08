<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
export default{ 
  data() {
    return {
      id: this.$route.params.id,
      series: []
    }
  },
  mounted(){
        axios
        .get('https://api.themoviedb.org/3//trending/tv/week?page=2&api_key=6f9286d54de4891ea7a5c91779e09786&language=it')
        .then(response => this.series = response.data.results)
    },
  methods: {
    
  },
  computed: {
    ReturnImage(){

      for (let i = 0; i < this.series.length; i++) {

        if (this.id==this.series[i].id) {

          return "https://image.tmdb.org/t/p/w500" + this.series[i].poster_path

        }
      }
    },
    ReturnTitle(){

      for (let i = 0; i < this.series.length; i++) {
        
        if (this.id==this.series[i].id) {
          
          return this.series[i].name
        }
      }
    },
    ReturnPopularity(){

      for (let i = 0; i < this.series.length; i++) {
        
        if (this.id==this.series[i].id) {
          
          return this.series[i].popularity
        }
      }
    },
    ReturnOverwiew(){

      for (let i = 0; i < this.series.length; i++) {
        
        if (this.id==this.series[i].id) {
          
          return this.series[i].overview
        }
      }
    },
    ReturnVoteAverage(){

      for (let i = 0; i < this.series.length; i++) {
        
        if (this.id==this.series[i].id) {
          
          return this.series[i].vote_average
        }
      }
    },
    ReturnVoteCount(){

      for (let i = 0; i < this.series.length; i++) {
        
        if (this.id==this.series[i].id) {
          
          return this.series[i].vote_count
        }
      }
    },
    ReturnLanguage(){

      for (let i = 0; i < this.series.length; i++) {
        
        if (this.id==this.series[i].id) {
          
          return this.series[i].original_language
        }
      }
    }

  }
}
</script>
<template>
  <!--
<img :href="ReturnImage" alt="Immagine">
 film.popularity 
Descrizione:{{ film.overview }}
Media voti:{{ film.vote_average }} 
Voti totali: {{ film.vote_count }}
  -->
  <br>
  <br>
  <br>
<div class="container tabella">
  <div class="row">
    <div class="col-5">
    <img :src="ReturnImage" alt="Immagine" class="imgTV2">
  </div>
  <div class="col-7">
    <div class="infoTV2">
      <div class="row titolo" style="font-size: xx-large;">
        {{ ReturnTitle }}
      </div>
      <div class="row colonna" style="font-family: cursive;">
        {{ ReturnOverwiew }}
      </div>
      <div class="row visual">
        Visualizzazioni:{{ ReturnPopularity }}
      </div>
      <div class="row colonna" style="font-family: cursive;">
        <div class="col-6">
          Media voti:{{ ReturnVoteAverage }}
        </div>
        <div class="col-6">
        Lingua originale: {{ ReturnLanguage }}
        </div>
      </div>
      <div class="row colonna" style="font-family: cursive;">
        <div class="col-6" style="font-size: large;text-align: left;">
        Voti:{{ ReturnVoteCount }}<span class="material-symbols-outlined">thumb_up</span>
        </div>
        <div class="col-6">
          <RouterLink to="/TVseries2"><button class="btn btn-outline-light" type="submit">TORNA INDIETRO</button></RouterLink>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
<br>
</template> 
<style>
.tabella{
  font-family: cursive;
}
.imgTV2{
  height: 830px;
  width: 550px;
}
.infoTV2{
  border: solid 5px black;
  background-color: lightslategray;
    color: white;
    font-size: large;
    font-weight: bold;
    text-align: left;
    height: 835px;
    width: 800px;
 }
 .colonna{
    font-size: large;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: left;
 }
.material-symbols-outlined {
  color:white;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.titolo{
  font-size: large;
  text-align: left;
}

</style>
<!--mounted(){
        axios
        .get('https://api.themoviedb.org/3//trending/tv/week?page=1&api_key=6f9286d54de4891ea7a5c91779e09786&language=it')
        .then(response => this.series = response.data.results)
    },--> 