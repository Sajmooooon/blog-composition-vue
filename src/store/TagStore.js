import { defineStore } from 'pinia'

export const useTagStore = defineStore('tagStore',  {
    state:()=>({
        tags: [],
        tagSet: new Set(),
    }),

    actions: {
        getTags(posts){
            posts.forEach((post)=>{
                post.tags.forEach((tag)=>{
                    this.tagSet.add(tag)
                })
            })
            this.tags = [...this.tagSet]
        },
    },


})