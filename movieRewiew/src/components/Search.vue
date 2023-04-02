<script>
import axios from 'axios'
export default{
    data() {
      const lang = localStorage.getItem("lang") || "it";
        return {
            films: [],
            SearchFilm: '',
            lang: lang,
        }
    },
    methods: {
        CreatePage(){
            axios
            .get("https://api.themoviedb.org/3//trending/movie/week?page="+ this.page +"&api_key=6f9286d54de4891ea7a5c91779e09786&language="+ this.lang)
            .then(response => this.films = response.data.results)
        },
        Research(){
            this.CreatePage
            if(this.films.filter(film => film.title.includes(this.SearchFilm))){
                this.$emit('search-name', { page, SearchFilm })
            }
        }
    },
  computed: {
    FilteredFilms(){
      this.CreatePage()
      return this.films.filter(film => film.title.includes(this.searchName))
    }
  },
}
</script>
<template>
</template>
<style>
</style>