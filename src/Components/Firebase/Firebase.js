import React from 'react'
import FirebaseInitialization from "./FirebaseInitialization";
import {useEffect, useState} from "react"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider,signInWithPopup,GithubAuthProvider, updateProfile } from "firebase/auth";
import {useHistory} from "react-router-dom";
FirebaseInitialization();



const Firebase = ()=>{
    const auth = getAuth();
    const history = useHistory();
    console.log(history);
    

    const [newUser, setNewUser] = useState();

    const [errorMsg , setErrorMsg] = useState('');

    // Register New User
    const registerNewUser = (email, password, userName)=>{

       return createUserWithEmailAndPassword
        
     

    }



    // Log In a user 
        const logInUser = (email, password)=>{


            return signInWithEmailAndPassword;
            
           


        }




       

        // google Log In 


        
        const googleProvider = new GoogleAuthProvider();
        const googleSingIn = ()=>{

            signInWithPopup(auth, googleProvider )
            .then(result=>{
                
                const user = result.user;
                setNewUser(user);
                console.log(user);
            })
            .catch(err=>{
                const error = err.message;
                    setErrorMsg(error);
                console.log(err);
            })



        }



        // Git hub Log In 

             const githubProvider = new GithubAuthProvider();

            const gitHubSingIn = ()=>{
                signInWithPopup(auth, githubProvider)
                .then(result=>{
                    const user = result.user;
                  
                    setNewUser(user);
                    console.log(user);
                })
                .catch(err=>{
                    const error = err.message;
                    setErrorMsg(error);
                        console.log(err);
                }
                )
            }











 // Log out a user 
 const logOut = ()=>{
    signOut(auth)
    .then(()=>{
       
     
        console.log("Log out Successfull");
        setNewUser('')
       
    })
    .catch(err=>{
        const error = err.message;
                    setErrorMsg(error);
        console.log(err);
    })


}


        useEffect(()=>{

            onAuthStateChanged(auth, user=>{


                if (user) {

                    setNewUser(user);
                    console.log(user);
                    

                }
                else{
                    setNewUser(" ");
                    console.log("User Log Out");
                }



            })






        },[newUser])
   


        return{
            newUser,
            setNewUser,
            errorMsg,
            setErrorMsg,
            registerNewUser,
            logOut,
            gitHubSingIn,
            googleSingIn,
            logInUser,

        }





}

export default Firebase;