import { defineStore } from 'pinia'

export const usePostsStore = defineStore('postsStore',  {
    state:()=>({
        posts: [],
        error: null,
    }),

    actions: {
        async load(){
            try{
                let data = await fetch("http://localhost:3000/posts")
                if (!data.ok){
                    throw Error('no data available')
                }
                this.posts = await data.json()
            }
            catch (err){
                this.error = err.message
                console.log(this.error)
            }
        }
    }

})