import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Confg";
const initialization = () => {
    initializeApp(firebaseConfig)
}

export default initialization;