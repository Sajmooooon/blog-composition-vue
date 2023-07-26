<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
import {onMounted} from "vue";
export default {
  name: "PostList",
  components: {SinglePost},
  props: ['posts'],
  setup(props){
    console.log(props.posts)
    onMounted(()=>{
      console.log('mounted')
    })
  }
}
</script>

<style scoped>

</style>