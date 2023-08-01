<template>

  <div  class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <div class="layout">
        <PostList v-if="showPosts" :posts="posts"></PostList>
        <TagCloud :posts="posts"/>
      </div>
      <button @click="showPosts=!showPosts">Toggle posts</button>
      <button @click="posts.pop()">Delete last post</button>
    </div>

    <div v-else>  <Spinner/></div>

  </div>

</template>

<script>
import PostList from "@/components/PostList";
import {ref, reactive, computed, watch, watchEffect} from "vue";
import Spinner from "@/components/Spinner";
import TagCloud from "@/components/TagCloud";
import {usePostsStore} from "@/store/PostsStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: 'HomeView',
  components: {TagCloud, Spinner, PostList},

  setup(){
    const showPosts = ref(true)
    const postsStore = usePostsStore()
    postsStore.load()
    const {posts,error} = storeToRefs(postsStore)
    // const {posts,error, load }= getPosts()
    // load()

    return {posts,showPosts,error}
  }
}
</script>


<style>
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
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
