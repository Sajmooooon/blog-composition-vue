<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>

  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";

export default {
  name: "DetailsView",
  components: {Spinner},
  props: ['id'],
  setup(props){
    const {post,error, load} = getPost(props.id)
    load()
    return {post,error}
  }

}
</script>

<style scoped>
.post{
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre{
  white-space: pre-wrap;
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