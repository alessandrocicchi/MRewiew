<script>
import axios from 'axios';
export default {
  data() {
      const lang = localStorage.getItem("lang") || "it";
        return {
            pages: 1,
            searchName: "",
            films: [],
            lang: lang
        }
    },
  methods: {
    handleChange(event){
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    CreatePage() {
            axios
                .get("https://api.themoviedb.org/3//trending/movie/week?page=1&api_key=6f9286d54de4891ea7a5c91779e09786&language=" + this.lang)
                .then(response => this.films = response.data.results)
        },
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-xl fixed-top">
    <div class="container-fluid">
      <span class="material-symbols-outlined">movie_filter</span>
      <a class="navbar-brand" href="#" style="color: red;">Movie Rewiew</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/film"><a class="nav-link home" aria-current="page">Film</a></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/TVseries"><a class="nav-link home" aria-current="page">Series TV</a></RouterLink>
          </li>
        </ul>
        <select class="btn btn-outline-danger select" v-model="lang" @change="handleChange($event)">
          <option value="it">italiano</option>
          <option value="en">english</option>
          <option value="fr">french</option>
        </select>
      </div>
    </div>
  </nav>
</template>
<style>
.home{
  color: black;
  font-size:larger;
}
.home:hover{
  color: red;
  font-weight: bold;
  font-size:larger;
}
.language{
  color: red;
  font-size:larger;
}
.language:hover{
  color: black;
  font-size: larger;
}
.material-symbols-outlined {
  color: red;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.menu{
  font-weight: bold;
  font-size:large;
  background-color: white;
  color: black;
}
.menu:hover{
  background-color: red;
  color: white;
}
.select{
  height: 38px;
  width: 100px;
  border-radius: 5px;
}
</style>



