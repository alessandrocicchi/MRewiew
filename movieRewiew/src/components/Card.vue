<script>
import { RouterLink} from 'vue-router'
export default{
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            lang: lang,
            SearchFilm: '',
            id: this.$route.params.id
        }
    },
    props:{
        films:{
            type: Array,
            required: true
        },
        page:{
            type:Number,
            required:true
        },
        type:{
            type: String,
            required: true
        }
    },
    methods: {
        ReturnImage(film) {
            return "https://image.tmdb.org/t/p/w500" + film.backdrop_path;
        },
        ReturnTitle(film){
            return film.title || film.name
        },
        ReturnDate(film){
            return film.first_air_date || film.release_date
        }
    },
    computed: {
        }
        
}
</script>
<template>
<div v-for="film in films">
    <div class="card cardTV" style="width: 40rem; height: auto;">
        <img :src="ReturnImage(film)" class="card-img-top">
        <h5 class="card-title">{{ ReturnTitle(film) }}</h5>
        <h5>{{ $t("DataDiRilascio") }}: {{ ReturnDate(film) }}</h5>
        <router-link :to="{ name: 'info', params: { id: film.id, page: this.page, type: this.type } }"></router-link>
        <button class="btn btn-light btnCard" type="submit" @click="$router.push({ name: 'info', params: { page: this.page ,id: film.id, type: this.type } })" style="font-weight: bold;height: 42px;width: 630px;">INFO</button>
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