<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>
    <button @click="handleClick">Delete Post</button>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";
import {useRoute} from "vue-router/dist/vue-router";
import {usePostStore} from "@/store/PostStore";
import {storeToRefs} from "pinia/dist/pinia";
import {collection,deleteDoc,doc} from "firebase/firestore/lite";
import {db} from "@/firebase/config";
import {useRouter} from "vue-router/dist/vue-router";


export default {
  name: "DetailsView",
  components: {Spinner},
  props: ['id'],
  setup(props){
    const route = useRoute()
    const router = useRouter()
    // const {post,error, load} = getPost(props.id)

    const postStore = usePostStore()
    // const {post,error, load} = usePostStore().init(route.params.id)
    postStore.load(route.params.id)
    const {post,error} = storeToRefs(postStore)

    const handleClick = async ()=>{
      const postRef = doc(db, 'posts', props.id)
      await deleteDoc(postRef).then(()=>console.log('Deleted id: '+ props.id))
      await router.push({name: 'home'})
      // await deleteDoc(collection(db,'posts',props.id))
    }

    return {post,error, handleClick}
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