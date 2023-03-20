<script>
import axios from 'axios';

export default{
    data(){
        return{
            films: []
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
        .get("https://api.themoviedb.org/3//trending/movie/week?page="+ this.page +"&api_key=6f9286d54de4891ea7a5c91779e09786&language=it")
        .then(response => this.films = response.data.results)
    },
    methods: {
        ReturnImage(film) {
            return "https://image.tmdb.org/t/p/w500" + film.backdrop_path;
        },
    }
}
</script>
<template>
<div v-for="film in films" :key="film.id">
    <div class="card cardTV" style="width: 27rem; height: auto;">
        <img :src="ReturnImage(film)" class="card-img-top">
        <h5 class="card-title">{{ film.title }}</h5>
        <h5>Data di Rilascio: {{ film.release_date }}</h5>
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