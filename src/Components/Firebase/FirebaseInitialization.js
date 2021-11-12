import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";


const FirebaseInitialization = ()=>{


     initializeApp(firebaseConfig);



}


export default FirebaseInitialization;