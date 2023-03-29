<script>
import axios from 'axios';
import { RouterLink} from 'vue-router'
export default{
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            films: [],
            lang: lang,
            SearchFilm: ''
        }
    },
    props:{
        page:{
            type: Number,
            required: true
        }
    },
    mounted(){
        axios
        .get("https://api.themoviedb.org/3//trending/movie/week?page="+ this.page +"&api_key=6f9286d54de4891ea7a5c91779e09786&language="+ this.lang)
        .then(response => this.films = response.data.results)
    },
    methods: {
        ReturnImage(film) {
            return "https://image.tmdb.org/t/p/w500" + film.backdrop_path;
        },
        CreatePage() {
            axios
                .get("https://api.themoviedb.org/3//trending/movie/week?page=" + this.page + "&api_key=6f9286d54de4891ea7a5c91779e09786&language=" + this.lang)
                .then(response => this.films = response.data.results)
        },
    },
    computed: {
        FilteredFilms(){
            this.CreatePage()
            if(this.SearchFilm.trim().length > 0){
                return this.films.filter((film) => film.title.includes(this.SearchFilm.trim()))
            }
            return this.films
        }
        
    },
}
</script>
<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="text" :placeholder="$t('Cerca')" aria-label="Search" v-model="SearchFilm" style="border-radius: 10px;">
        <button class="btn btn-outline-dark" type="submit" style="font-size: medium;border-radius: 10px;" @onclick="FilteredFilms">{{$t('Cerca')}}</button>
    </form>
    <br>
<div v-for="film in FilteredFilms" :key="film.id">
    <div class="card cardTV" style="width: 27rem; height: auto;">
        <img :src="ReturnImage(film)" class="card-img-top">
        <h5 class="card-title">{{ film.title }}</h5>
        <h5>{{ $t("DataDiRilascio") }}: {{ film.release_date }}</h5>
        <router-link :to="{ name: 'info', params: { id: film.id, page: this.page } }"></router-link>
        <button class="btn btn-light btnCard" type="submit" @click="$router.push({ name: 'info', params: { id: film.id, page: this.page } })" style="font-weight: bold; height: 42px;width: 424px;">INFO</button>
    </div>  
</div>
</template>
<style>
.cardTV {
  border: 5px solid black;
  background-color: black;
  color: red;
  text-align: center;
  font-weight: bold; 
}
</style>