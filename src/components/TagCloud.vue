<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag"><router-link :to="{name: 'tag', params: {tag:tag}}">#{{tag}}</router-link></div>
  </div>
</template>

<script>
import useTags from "@/composables/useTags";
import {useTagStore} from "@/store/TagStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "TagCloud",
  props: ['posts'],
  setup(props){
    const tagsStore = useTagStore()
    tagsStore.getTags(props.posts)
    const {tags} = storeToRefs(tagsStore)
    return {tags}
  }
}
</script>

<style scoped>
.tag-cloud{
  padding: 10px;
}

.tag-cloud h3{
  border-bottom: 1px solid #eeeeee;
  color: #444;
  padding: 16px 8px;
}

.tag-cloud div{
  display: inline-block;
  padding: 5px;

}
.tag-cloud a{
  color: #ccc;
  text-decoration: none;
}

.tag-cloud a.router-link-active{
  color: #ff8800;
  font-weight: bold;
}
</style>