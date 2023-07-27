<template>
  <div class="post">
    <router-link :to="{name: 'details', params: {id: post.id}}">
      <h3>{{post.title}}</h3>
    </router-link>
    <p>{{snippet}}</p>
    <span v-for="tag in post.tags" key="tag">
      #{{tag}} </span>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SinglePost",
  props: ['post'],
  setup(props){
    const snippet = computed(()=>{
      return props.post.body.substr(0,50)+"..."
    })

    return {snippet}
  }
}
</script>

<style scoped>
.post{
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3{
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
.post h3::before{
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -20px;
  transform: rotateZ(-1.5deg);
}
</style>