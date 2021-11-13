import React from 'react';
import './Header.css';
import {NavLink, useHistory} from "react-router-dom";
import UseAuthFirebase from '../CustomHook/UseAuthFirebase';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider,signInWithPopup,GithubAuthProvider, updateProfile } from "firebase/auth";
import { Button } from '@mui/material';




const Header = () => {
    const auth = getAuth();
    const history = useHistory();

    const {newUser,isLoading, setIsLoading,logInUser,setNewUser,setErrorMsg, errorMsg, } = UseAuthFirebase();




    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
           
         
            console.log("Log out Successfull");
            setNewUser('');
            history.push("/login")
           
        })
        .catch(err=>{
            const error = err.message;
                        setErrorMsg(error);
            console.log(err);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    
    
    }







    return (
        <div>

            <div className="header-container">
                <div className="header-box">


                    <div className="logo-h-container">
                        <img src="https://i.ibb.co/j6Zhf0t/bike-point-logo-1.gif" alt="" width="60px" height="60px"/>
                    </div>


                    <div className="all-link-container">
                    <div className='userImage-container'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                        <NavLink to='/'>Contact Us</NavLink>
                        {newUser?.email? null:<NavLink to='/login'>Log In</NavLink>}
                        {newUser?.email? null:<NavLink to='/register'>Register</NavLink>}
                        {newUser?.email? <NavLink to='/dashboard'>Dashboard</NavLink>:null}
                        {newUser?.email && newUser?.displayName? <NavLink to='/dashboard'>{newUser?.displayName}</NavLink>:null}
                       
                        {newUser?.email && newUser?.photoURL? <img src={newUser?.photoURL} className='userImage' alt="" srcset="" />:null}

                          {newUser?.email?<Button onClick={logOut} variant="contained" style={{
                             backgroundColor:"#3BB77E",
                             marginLeft:'20px'
                        }}>Log Out</Button>:null}
                        </div>
                        
                       

                    </div>






                </div>
            </div>
            
        </div>
    );
};

export default Header;