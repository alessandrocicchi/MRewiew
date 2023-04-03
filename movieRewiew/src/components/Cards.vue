<script>
import axios from 'axios';
import SearchBar from './SearchBar.vue';
export default{
    name: 'cards',
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            type: this.$route.params.type,
            list: [],
            pages: 1,
            total: 50,
            lang: lang
        }
    },
    components: { SearchBar},
    async mounted(){
        let result = await axios
            .get('https://api.themoviedb.org/3//trending/'+this.type+'/week?page='+this.pages+'&api_key=6f9286d54de4891ea7a5c91779e09786&language='+ this.lang)
            this.list = result.data.results
    }
}
</script>
<template>
<div style="background-image: linear-gradient(to left, black, lightslategray);width: 1900px;margin-left: -350px;height: auto;">
    <br>
    <br>
    <br>
    <div class="row">
            <div class="col-4">

            </div>
            <div class="col-4">
                <SearchBar :type="this.type" />
            </div>
            <div class="col-4">
            </div>
        </div>
    
</div>
</template>
<style>
</style>