<template>
  <div class="home">
    <h1>#{{tag}}</h1>

    <div v-if="error">{{error}}</div>


    <div v-if="posts.length">
      <div class="layout">
        <PostList :posts="filteredPosts"></PostList>
        <TagCloud :posts="posts"/>
      </div>

    </div>

    <div v-else>  <Spinner/></div>
  </div>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import {computed, ref} from "vue";
import getPosts from "@/composables/getPosts";
import PostList from "@/components/PostList";
import Spinner from "@/components/Spinner";
import TagCloud from "@/components/TagCloud";

export default {
  name: "TagView",
  components: {TagCloud, Spinner, PostList},
  setup(){
    const route = useRoute()
    const tag = computed(()=>{
      return route.params.tag
    })
    const {posts,error, load }= getPosts()
    load()

    const filteredPosts = computed(()=>{
      return posts.value.filter((post)=>post.tags.includes(route.params.tag))
    })

    return {filteredPosts,error,tag,posts}
  }
}
</script>

<style scoped>

</style>