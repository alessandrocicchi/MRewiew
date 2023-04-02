<script>
import Card from './Card.vue';
import axios from 'axios';
export default{
    name: 'cards',
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            type: this.$route.params.type,
            list: null,
            pages: 1,
            total: 2,
            lang: lang
        }
    },
    components: {Card},
    async mounted(){
        let result = await axios
            .get('https://api.themoviedb.org/3//trending/'+this.type+'/week?page='+this.pages+'&api_key=6f9286d54de4891ea7a5c91779e09786&language='+ this.lang)
            this.list = result.data.results
    }
}
</script>
<template>
<div style="background-image: linear-gradient(to left, black, lightslategray);height: 950px;width: 1900px;margin-left: -350px;height: auto;">
    <h1 style="color: aliceblue;text-align: center;margin-top: 80px;">{{type}}</h1>
    <div class="row" v-for="film in list">
        <div class="col-4"></div>
        <div class="col-4">
            <Card :page="this.pages" :film="film"/>
        </div>
        <div class="col-4"></div>
    </div>
</div>
</template>
<style>
</style>