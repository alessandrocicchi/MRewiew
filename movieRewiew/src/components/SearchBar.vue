<script>
import Card from './Card.vue'
import axios from 'axios'
export default{

    data(){
        return {
            SearchFilm: '',
            films: [],
            total: 30
        }
    },
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed: {
        FilteredFilms(){
            axios
            .get('https://api.themoviedb.org/3/search/'+this.type+'?api_key=512f81af17888b517a1b456fbce07689&query='+this.SearchFilm)
            .then(response => this.films= response.data.results)
            return this.films
        },
        
    },
    components:{Card}
}
</script>
<template>
    <form class="d-flex searchbar" role="search" >
        <input class="form-control me-2" type="text" :placeholder="$t('Cerca')" aria-label="Search" v-model="SearchFilm" >
        <button class="btn btn-outline-light" type="submit" style="font-size: medium;border-radius: 7px;height: 45px;" @onclick="FilteredFilms">{{$t('Cerca')}}</button>
    </form>
    <div style="color: antiquewhite;">{{ SearchFilm }}</div>
    <div v-for="film in FilteredFilms" style="text-align: center;color: antiquewhite;">
        {{ film.title }}
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="row" v-for="page in total">
        <div class="col-4"></div>
        <div class="col-4">
            <Card :type="this.type" :page="page" :films="this.films"/>
        </div>
        <div class="col-4"></div>
    </div>
</template>
<style>
.searchbar{
    height: 45px;
    width: 40rem;
}
</style>