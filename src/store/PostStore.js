import { defineStore } from 'pinia'
import {db} from "@/firebase/config";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';


export const usePostStore = defineStore('postStore',  {
    state:()=>({
        post: null,
        error: null,
    }),

    actions: {
        async load(id){
            try{
                const post = doc(db,'posts',id)
                const postSnap = await getDoc(post);
                this.post = {...postSnap.data(), id: postSnap.id}
            }
            catch (err){
                this.error = err.message
                console.log(this.error)
            }
        }
    }

})