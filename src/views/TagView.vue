<template>
  <div class="home">
    <h1>#{{tag}}</h1>
    <div v-if="error">{{error}}</div>


    <div v-if="posts.length">
      <PostList :posts="filteredPosts"></PostList>
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

export default {
  name: "TagView",
  components: {Spinner, PostList},
  setup(){
    const route = useRoute()
    const tag = ref(route.params.tag)
    const {posts,error, load }= getPosts()
    load()

    const filteredPosts = computed(()=>{
      return posts.value.filter((post)=>post.tags.includes(tag.value))
    })

    return {filteredPosts,error,tag,posts}
  }
}
</script>

<style scoped>

</style>