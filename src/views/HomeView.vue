<template>

  <div  class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts"></PostList>
      <button @click="showPosts=!showPosts">Toggle posts</button>
      <button @click="posts.pop()">Delete last post</button>
    </div>

    <div v-else>  <Spinner/></div>

  </div>

</template>

<script>
import PostList from "@/components/PostList";
import {ref, reactive, computed, watch, watchEffect} from "vue";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner";

export default {
  name: 'HomeView',
  components: {Spinner, PostList},

  setup(){
    const showPosts = ref(true)
    const {posts,error, load }= getPosts()
    load()

    return {posts,showPosts,error}
  }
}
</script>


<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

button{
  margin-right: 5px;
  display: inline-block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
</style>
