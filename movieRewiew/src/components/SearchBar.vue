<script>

export default{

    data(){
        return {
            SearchFilm: '',
        }
    },
    computed: {
        FilteredFilms(){
            this.CreatePage()
            if(this.SearchFilm.trim().length > 0){
                return this.films.filter((film) => film.title.includes(this.SearchFilm.trim()))
            }
            return this.films
        }
        
    }
}
</script>
<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2 ricerca" type="text" :placeholder="$t('Cerca')" aria-label="Search" v-model="SearchFilm" style="border-radius: 10px;">
        <button class="btn btn-outline-light" type="submit" style="font-size: medium;border-radius: 10px;height: 40px;" @onclick="FilteredFilms">{{$t('Cerca')}}</button>
    </form>
</template>