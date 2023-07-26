<template>

  <div  class="home">
    <h1>home</h1>
    <PostList :posts="posts"></PostList>
  </div>

</template>

<script>
import PostList from "@/components/PostList";
import {ref, reactive, computed, watch, watchEffect} from "vue";

export default {
  name: 'HomeView',
  components: {PostList},

  setup(){
    let test = "lorem "
    const posts = ref([
      {title:'nonon',body:'Lorem ipsum dolor sit amet,',id:1},

      {title:'welcome',body:'consectetur adipiscing elit',id:2}
    ])
    return {posts}
  }
}
</script>
