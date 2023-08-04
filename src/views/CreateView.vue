<template>
  <div class="create">
    <form @submit.prevent="addPost">
      <label>Title:</label>
      <input type="text" v-model="title" required>

      <label>Content:</label>
      <textarea v-model="body" required></textarea>

      <label>Tags (hit enter to add tag)</label>
      <input @keydown.enter.prevent="addTag" v-model="tag" type="text" >
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import {collection,addDoc} from "firebase/firestore/lite";
import {db} from "@/firebase/config";

export default {
  name: "CreateView",
  setup(){

    const title = ref(null)
    const body = ref(null)
    const tag = ref(null)
    const tags = ref([])
    const router = useRouter()
    const colRef = collection(db,'posts')

    const addPost = async () =>{
      const post = {title: title.value, body: body.value, tags: tags.value}

      await addDoc(colRef,post)

      await router.push({name: 'home'})
    }
    const addTag = () =>{
      if(!tags.value.includes(tag.value) && tag.value){
        tag.value = tag.value.replace(/\s/,'')
        tags.value.push(tag.value)
      }
      tag.value  = null
    }

    return {title, body, tag, addPost, addTag, tags}
  }
}
</script>

<style scoped>
form{
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input, textarea{
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea{
  height: 160px;
}
label{
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before{
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
button{
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.pill{
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>