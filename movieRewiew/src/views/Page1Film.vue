<script>
import Card from '../components/Card.vue';
export default{
    data() {
        return {
            films: [],
            pages: 1,
            total: 50
        };
    },
    methods: {
        ReturnImage(film) {
          return "https://image.tmdb.org/t/p/w500" + film.backdrop_path;
        }
    },
    components: { Card }
}
</script>
<template>
  <br>
  <div class="container tabella" v-for="pages in total">
    <div class="row">
      <div class="col-12">
        <Card :page="pages"></Card>
      </div>
    </div>
  </div>
  </template>
<style>
.tabella{
  text-align: center;
  font-family: cursive;
}
.films {
  text-align: center;
}
.btnCard{
  font-weight: bold;
   height: 42px;
   width: 422px;
}
.btnCard:hover{
  color: white;
  background-color: red;
  font-weight: bold;
   height: 42px;
   width: 422px;
}
</style>
<!--this.films = response.data.results
<div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  .get('https://jsonplaceholder.typicode.com/posts') da inserire nella funzione mounted()
  data() {
    return {
      posts: []
    }
  },-->
  <!--<section>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">UserID:</label>
        <input type="text" id="userId" v-model="postData.userId">
      </div>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="postData.title">
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea id="body" rows="6" cols="22" v-model="postData.body"></textarea>
      </div>
      <button>Create Post</button>
    </form>
  </section>
  .post('https://jsonplaceholder.typicode.com/posts', this.postData)
  data() {
    return {
      postData: { userid: '', title: '', body: '' }
    }
  },
   
  methods: {

    createPost(){
        axios
        .post('https://jsonplaceholder.typicode.com/posts', this.postData) 
        .then(response =>console.log(response))
    }
  }
  -->
  <!-- METODO PUT
  mounted(){
        axios
        .put('https://jsonplaceholder.typicode.com/posts/1',{
          id:'1',
          userId: '1',
          title: 'Article Title',
          body: 'Article body'
        }) 
        .then(response =>console.log(response))
  }-->
  <!-- METODO PATCH
    mounted(){
        axios
        .patch('https://jsonplaceholder.typicode.com/posts/1',{
          title: 'Article Title',
        }) 
        .then(response =>console.log(response))
  }-->

  <!-- METODO DELETE
  mounted(){
        axios
        .delete('https://jsonplaceholder.typicode.com/posts/1') 
        .then(response =>console.log(response))
  }-->

  <!-- METODO ERROR
  mounted(){
        axios
        .get('https://jsonplaceholder.typicode.com/wrong') 
        .catch(error => console.log(error))
  }-->




