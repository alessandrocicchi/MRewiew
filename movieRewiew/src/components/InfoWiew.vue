<script>
import axios from 'axios';
import { RouterLink} from 'vue-router'
export default{ 
  data() {
    return {
      films: [],
      pages: this.$route.params.page,
      id: this.$route.params.id
    }
  },
  methods: {
    CreatePage(){
            axios
            .get('https://api.themoviedb.org/3//trending/movie/week?page='+this.pages+'&api_key=6f9286d54de4891ea7a5c91779e09786&language=it')
            .then(response => this.films = response.data.results)
          }
  },
  computed: {
    ReturnImage(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {

        if (this.id==this.films[i].id) {

          return "https://image.tmdb.org/t/p/w500" + this.films[i].poster_path

        }
      }
    },
    ReturnTitle(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].title
        }
      }
    },
    ReturnPopularity(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].popularity
        }
      }
    },
    ReturnOverwiew(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].overview
        }
      }
    },
    ReturnVoteAverage(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].vote_average
        }
      }
    },
    ReturnVoteCount(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].vote_count
        }
      }
    },
    ReturnLanguage(){

      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].original_language
        }
      }
    }

  },
  }
</script>
<template>
  <br>
  <br>
  <br>
  <div class="container tabellaINFO">
  <div class="row">
    <div class="col-5">
    <img :src="ReturnImage" alt="Immagine" style="height: 740px;width: 550px;">
  </div>
  <div class="col-7">
    <div class="infoF">
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
        <div class="col-6">
        Voti:{{ ReturnVoteCount }}<span class="material-symbols-outlined">thumb_up</span>
        </div>
        <div class="col-6">
          <RouterLink to="/film"><button class="btn btn-outline-light" type="submit" style="font-family: cursive;">TORNA INDIETRO</button></RouterLink>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
<br>
</template> 
<style>
.tabellaINFO{
  font-family: cursive;
  width: 2000px;
  height: 1000px;
}
.infoF{
  border: solid 5px black;
  background-color: lightslategray;
    color: white;
    font-size: large;
    font-weight: bold;
    text-align: left;
    height: 740px;
    width: 800px;
 }
 .visual{
    font-size: large;
    font-family: cursive;
    text-align: center;
    padding: 30px;
 }
 .colonna{
    font-size: large;
    font-weight: bold;
    font-family: cursive;
    text-align: left;
    padding: 30px;
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
  color: red;
  margin-left: 100px;
  margin-top: 20px;
}

</style>
<!--mounted(){
        axios
        .get('https://api.themoviedb.org/3//trending/tv/week?page=1&api_key=6f9286d54de4891ea7a5c91779e09786&language=it')
        .then(response => this.series = response.data.results)
    },--> 
    <!--
<img :href="ReturnImage" alt="Immagine">
 film.popularity 
Descrizione:{{ film.overview }}
Media voti:{{ film.vote_average }} 
Voti totali: {{ film.vote_count }}
  -->