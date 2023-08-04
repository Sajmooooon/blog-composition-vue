import { defineStore } from 'pinia'
import {db} from "@/firebase/config";
import { collection, getDocs, query,orderBy } from 'firebase/firestore/lite';


export const usePostsStore = defineStore('postsStore',  {
    state:()=>({
        posts: [],
        error: null,
    }),

    actions: {
        async load(){
            try{
                const postsCol = collection(db,'posts')
                const q = query(postsCol,orderBy('createdAt','asc'))
                const postsSnap = await getDocs(q);

                this.posts = postsSnap.docs.map(doc=> {return { ...doc.data(), id: doc.id}})
            }
            catch (err){
                this.error = err.message
                console.log(this.error)
            }
        }
    }

})