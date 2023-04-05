<script>
import axios from 'axios';
import { RouterLink} from 'vue-router'
export default{ 
  data() {
    const lang = localStorage.getItem("lang") || "it";
    return {
      films: [],
      pages: this.$route.params.page,
      id: this.$route.params.id,
      type: this.$route.params.type,
      lang: lang
    }
  },
  methods: {
    CreatePage(){
            axios
            .get('https://api.themoviedb.org/3//trending/'+this.type+'/week?page='+this.pages+'&api_key=6f9286d54de4891ea7a5c91779e09786&language='+ this.lang)
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
          
          return this.films[i].title || this.films[i].name
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
    },
    ReturnDate(){
      this.CreatePage()

      for (let i = 0; i < this.films.length; i++) {
        
        if (this.id==this.films[i].id) {
          
          return this.films[i].first_air_date || this.films[i].release_date
        }
      }
    }
  }
  }
</script>
<template>
  <br>
<div>
  <div class="container tabellaINFO">
  <div class="row">
    <div class="col-5">
      <img :src="ReturnImage" alt="Immagine" style="height: 740px;width: 800px;margin-left: -200px;">
    </div>
    <div class="col-7">
      <div class="infoF">
      <div class="row titolo">
        {{ ReturnTitle }}
      </div>
      <div class="row colonna">
        {{ ReturnOverwiew }}
      </div>
      <div class="row visual">
        <div class="col-6">
          {{ $t("Visualizzazioni") }}:{{ ReturnPopularity }}
        </div>
        <div class="col-6">
          {{ $t("DataDiRilascio") }}:{{ ReturnDate }}
        </div>
      </div>
      <div class="row colonna">
        <div class="col-6">
          {{ $t("MediaVoti") }}:{{ ReturnVoteAverage }}
        </div>
        <div class="col-6">
          {{ $t("LinguaOriginale") }}: {{ ReturnLanguage }}
        </div>
      </div>
      <div class="row colonna">
        <div class="col-6">
        {{ $t("Voti") }}:{{ ReturnVoteCount }}
        </div>
        <div class="col-6">
          <RouterLink to="/"><button class="btn btn-outline-light" type="submit" style="font-family: cursive;">{{ $t("TornaIndietro") }}</button></RouterLink>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
</template> 
<style>
.tabellaINFO{
  text-align: center;
  font-family: cursive;
  width: 2000px;
}
.infoF{
  border: solid 5px black;
  background-color: lightslategray;
    color: white;
    font-size: large;
    font-weight: bold;
    height: 740px;
    width: 900px;
 }
 .visual{
    font-size: large;
    font-family: cursive;
    text-align: left;
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
  color:red;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.titolo{
  font-size: xx-large;
  text-align: left;
  color: red;
  margin-left: 100px;
  margin-top: 20px;
}
</style>
