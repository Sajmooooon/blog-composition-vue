import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore',  {
    state:()=>({
        post: null,
        error: null,
    }),

    actions: {
        async load(id){
            try{
                let data = await fetch("http://localhost:3000/posts/"+id)
                if (!data.ok){
                    throw Error('no data available')
                }
                this.post = await data.json()
            }
            catch (err){
                this.error = err.message
                console.log(this.error)
            }
        }
    }

})