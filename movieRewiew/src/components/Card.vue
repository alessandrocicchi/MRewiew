<script>
import axios from 'axios';
import { RouterLink} from 'vue-router'
export default{
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            lang: lang,
            SearchFilm: '',
        }
    },
    props:{
        film:{
            type: Object,
            required: true
        },
        page:{
            type:Number,
            required:true
        }
    },
    methods: {
        ReturnImage(film) {
            return "https://image.tmdb.org/t/p/w500" + film.backdrop_path;
        }
    },
    computed: {
        }
        
}
</script>
<template>
    
    <br>
    <br>
<div>
    <div class="card cardTV" style="width: 40rem; height: auto;">
        <img :src="ReturnImage(film)" class="card-img-top">
        <h5 class="card-title">{{ film.title }}</h5>
        <h5>{{ $t("DataDiRilascio") }}: {{ film.release_date }}</h5>
        <router-link :to="{ name: 'info', params: { id: film.id } }"></router-link>
        <button class="btn btn-light btnCard" type="submit" @click="$router.push({ name: 'info', params: { page: this.page ,id: film.id } })" style="font-weight: bold;height: 42px;width: 630px;">INFO</button>
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
.ricerca{
    height: 40px;
    width: 300px;
}
</style>