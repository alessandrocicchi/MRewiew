<script>
import { RouterLink} from 'vue-router'
export default{ 
  data() {
    const lang = localStorage.getItem("lang") || "it";
    return {
      lang: lang
    }
  },
  props:{
    film:{
      type: Array,
      required: true
    }
  },
  computed: {
    ReturnImage(){

      return "https://image.tmdb.org/t/p/w500" + this.film.poster_path
    },
    ReturnTitle(){
          
      return this.film.title || this.film.name
    },
    ReturnDate(){

      return this.film.first_air_date || this.film.release_date
    }
  }
}
</script>
<template>
  <br>
<div>
  <div class="container" style="margin-left: -75px;">
  <div class="row">
    <div class="col-6">
      <img :src="ReturnImage" style="height: 740px;width: 800px;margin-left: -450px;">
    </div>
    <div class="col-6">
      <div class="infoF">
      <div class="row titolo">
        {{ ReturnTitle }}
      </div>
      <div class="row colonna">
        {{ film.overview }}
      </div>
      <div class="row visual">
        <div class="col-6">
          {{ $t("Visualizzazioni") }}:{{ film.popularity }}
        </div>
        <div class="col-6">
          {{ $t("DataDiRilascio") }}:{{ ReturnDate }}
        </div>
      </div>
      <div class="row colonna">
        <div class="col-6">
          {{ $t("MediaVoti") }}:{{ film.vote_average }}
        </div>
        <div class="col-6">
          {{ $t("LinguaOriginale") }}: {{ film.original_language }}
        </div>
      </div>
      <div class="row colonna">
        <div class="col-6">
        {{ $t("Voti") }}:{{ film.vote_count }}
        </div>
        <div class="col-6">
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
</template> 
<style>
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
