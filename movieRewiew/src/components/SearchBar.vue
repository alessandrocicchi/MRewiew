<script>
import axios from 'axios'
import SearchInfo from './SearchInfo.vue'
export default{

    data(){
        return {
            SearchFilm: '',
            pages: 1,
            films: [],
            total: 30
        }
    },
    props:{
        type:{
            type:String,
            required: true
        }
    },
    methods:{
        ReturnImage(film) {
            return "https://image.tmdb.org/t/p/w500" + film.backdrop_path;
        },
        ReturnTitle(film){
            return film.title || film.name
        }
    },
    computed: {
        FilteredFilms(){
            if(this.SearchFilm.length > 0){
                axios
                .get('https://api.themoviedb.org/3/search/'+this.type+'?api_key=512f81af17888b517a1b456fbce07689&query='+this.SearchFilm)
                .then(response => this.films = response.data.results)
                return this.films
            }else if(this.SearchFilm.length == 0){
                return []
            }
            return this.films
        }
        
    },
    components:{SearchInfo}
}
</script>
<template>
    <form class="d-flex searchbar" role="search">
        <input class="form-control me-2" type="text" :placeholder="$t('Cerca')" aria-label="Search" v-model="SearchFilm" >
        <button class="btn btn-outline-light" type="submit" style="font-size: medium;border-radius: 7px;height: 45px;" @onclick="FilteredFilms">{{$t('Cerca')}}</button>
    </form>
    <div v-for="film in FilteredFilms">
        <SearchInfo :film="film" />
    </div>
    <br>
</template>
<style>
.searchbar{
    height: 45px;
    width: 40rem;
}
.opzioniFilm{
    font-size: large;
    border: 2px solid red;
    background-color: black;
    color: whitesmoke;
    font-weight: bold;
    text-align: center;
}
</style>