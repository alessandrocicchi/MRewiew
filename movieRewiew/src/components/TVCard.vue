<script>
import axios from 'axios';
export default{
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            series: [],
            lang: lang,
            SearchSerie: ''
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
          .get('https://api.themoviedb.org/3//trending/tv/week?page='+this.page+'&api_key=6f9286d54de4891ea7a5c91779e09786&language=' + this.lang)
          .then(response => this.series = response.data.results)
    },
    methods: {
        ReturnImage(serie) {
            return "https://image.tmdb.org/t/p/w500" + serie.backdrop_path;
        },
        CreatePage() {
            axios
                .get('https://api.themoviedb.org/3//trending/tv/week?page='+this.page+'&api_key=6f9286d54de4891ea7a5c91779e09786&language=' + this.lang)
          .then(response => this.series = response.data.results)
        },
    },
    computed: {
        FilteredSeries(){
            this.CreatePage()
            if(this.SearchSerie.trim().length > 0){
                return this.series.filter((serie) => serie.name.includes(this.SearchSerie.trim()))
            }
            return this.series
        }
    },
}
</script>
<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="text" :placeholder="$t('Cerca')" aria-label="Search" v-model="SearchSerie" style="border-radius: 10px;">
        <button class="btn btn-outline-light" type="submit" style="font-size: medium;border-radius: 10px;" @onclick="FilteredSeries">{{$t('Cerca')}}</button>
    </form>
    <br>
<div v-for="serie in FilteredSeries" :key="serie.id">
    <div class="card cardTV" style="width: 27rem; height: auto;">
        <img :src="ReturnImage(serie)" class="card-img-top">
        <h5 class="card-title">{{ serie.name }}</h5>
        <h5>{{ $t("DataDiRilascio") }}: {{ serie.first_air_date }}</h5>
        <router-link :to="{ name: 'infoTVSeries', params: { id: serie.id, page: this.page } }"></router-link>
        <button class="btn btn-light btnCard" type="submit" @click="$router.push({ name: 'infoTVSeries', params: { id: serie.id, page: this.page } })" style="font-weight: bold; height: 42px;width: 424px;">INFO</button>
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