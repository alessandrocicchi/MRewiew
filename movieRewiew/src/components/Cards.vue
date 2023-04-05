<script>
import axios from 'axios';
import SearchBar from './SearchBar.vue';
import Card from './Card.vue';
import SearchWiew from '../views/SearchWiew.vue';
export default{
    name: 'cards',
    data(){
        const lang = localStorage.getItem("lang") || "it";
        return{
            type: this.$route.params.type,
            pages:1,
            list: [],
            lang: lang
        }
    },
    components: { Card, SearchBar, SearchWiew },
    methods:{

        NextPage(){
            this.pages++
            this.CreatePage
        },
        PreviousPage(){
            this.pages--
            this.CreatePage
        }    
    },
    computed:{
        CreatePage(){
            axios
            .get('https://api.themoviedb.org/3//trending/'+this.type+'/week?page='+this.pages+'&api_key=6f9286d54de4891ea7a5c91779e09786&language='+ this.lang)
            .then(response => this.list = response.data.results)
            return this.list
        }
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
        <div class="col-4" style="text-align: center;"><SearchWiew /></div>
        <div class="col-4">
        </div>
    </div>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <Card :type="this.type" :page="this.pages" :films="CreatePage"/>
        </div>
        <div class="col-4"></div>
    </div>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" style="height: 50px;width: 25rem;text-align: center;" v-if="this.pages>1">
                        <a class="page-link" @click="PreviousPage" aria-label="Previous" style="font-size: large;font-weight: bold;">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" style="height: 50px;width: 25rem;text-align: center;">
                        <a class="page-link" @click="NextPage" aria-label="Next">
                            <span aria-hidden="true" style="font-size: large;font-weight: bold;">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-4"></div>
    </div>
</div>
</template>
<style>
</style>