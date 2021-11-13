import { CircularProgress, dividerClasses } from '@mui/material';
import React from 'react';
import './PrivateRoute.css';
import { Redirect, Route } from 'react-router';
import UseAuthFirebase from '../CustomHook/UseAuthFirebase';
const PrivateRoute = ({children, ...rest}) => {

    const {newUser, setIsloading, isLoading, setNewUser} = UseAuthFirebase();

    console.log("isloading private", isLoading, newUser?.email);
 
    if (isLoading) {
        return(<div className='spinner'><CircularProgress/></div>)
    }
  

 
   

   


    return (
        <Route
        {...rest}
        render={({location})=>newUser?.email?children:<Redirect
        to={{
            pathname:"/login",
            state:{from:location}
        }}
        
        
        
        ></Redirect>}
        
        
        
        
        ></Route>
    );   
};

export default PrivateRoute;