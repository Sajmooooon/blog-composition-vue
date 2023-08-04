import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    //addFirebaseConfig
};

//init firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
