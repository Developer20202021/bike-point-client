import { useContext } from "react"
import { FirebaseContext } from "./FirebaseAuthContext"

const UseAuthFirebase = ()=>{

    return useContext(FirebaseContext);
}

export default UseAuthFirebase;