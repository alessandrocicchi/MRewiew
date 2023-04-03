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
      <a class="navbar-brand" href="#" style="color: red;font-size: x-large;">Movie Rewiew</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{ name: 'cards', params: { type: 'movie' } }"><a class="nav-link home" aria-current="page" style="font-size: x-large;">Film</a></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'cards', params: { type: 'tv' } }"><a class="nav-link home" aria-current="page">Series TV</a></RouterLink>
          </li>
        </ul>
        <select class="btn btn-outline-danger select" v-model="lang" @change="handleChange($event)" style="width: 180px;height:45px;font-size: larger;">
          <option value="it" style="font-size: larger">italiano</option>
          <option value="en" style="font-size: larger">english</option>
          <option value="fr" style="font-size: larger;">french</option>
        </select>
      </div>
    </div>
  </nav>
</template>
<style>
.home{
  color: white;
  font-size:x-large;
}
.home:hover{
  color: red;
  font-weight: bold;
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



