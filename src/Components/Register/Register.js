import React, { useEffect, useState } from 'react';
import './Register.css';
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useHistory } from "react-router-dom";
import UseAuthFirebase from '../CustomHook/UseAuthFirebase';
import { getAuth, updateProfile,createUserWithEmailAndPassword } from '@firebase/auth';

const Register = () => {
  const history = useHistory();
  const auth = getAuth();
      const {newUser,registerNewUser, errorMsg,setNewUser,setErrorMsg } = UseAuthFirebase();

// console.log(registerNewUser);

    const [values, setValues] = React.useState({   password:'',

        showPassword: false,
      });
    const [confirmValues, setConfirmValues] = React.useState({
        confirmPassword:'',
        showConfirmPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleConfirmChange = (prop) => (event) => {
        setConfirmValues({ ...confirmValues, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
      const handleClickShowConfirmPassword = () => {
        setConfirmValues({
          ...confirmValues,
          showConfirmPassword: !values.showConfirmPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
      };










      const [userInfo, setUserInfo] = useState({userName:" ", email:" "})

      const getUserInfo = (e)=>{
        const name = e.target.name;
        const fieldValue = e.target.value;

        setUserInfo({...userInfo, [name]:fieldValue});

      }
      // console.log(userInfo);



  const  register =   ()=>{

        userInfo.password = values.password;
        // console.log(userInfo);
      
        
      createUserWithEmailAndPassword (auth,userInfo.email, userInfo.password, userInfo.userName)
        .then((result)=>{
            
          const user = result.user;
          console.log(user);
        
          setNewUser(user);

          const userAllInfo ={
              email:user.email,
              fullName:userInfo.userName,
              
          }

          fetch('https://immense-fjord-66300.herokuapp.com/public/new-user',{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(userAllInfo)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
          .catch(err=>{
              console.log(err);
          })
          
          
        
         
        
        
         
          if (user) {
              updateProfile(auth.currentUser,{
                  displayName:userInfo.userName
              })
              .then(()=>{
                  console.log("Profile Update SuccessFull");
                  history.push('/login')
                
                 
              })
              .catch(err=>{
                  const error = err.message;
                  setErrorMsg(error);
                  console.log(err);
              })
  
          }
         
         
        
      })
      .catch(err=>{
          console.log(err);
          const error = err.message;
                  setErrorMsg(error);
      })

      }


     





    return (
        <div>
          <Header></Header>
            <div className='registerPageContainer'>
                <Box  sx={{
                  
                    px:50,
                    py:20,
                   
                }}>
             
      <Grid   spacing={1}>
          
        <Grid container  spacing={3} item xs={12} md={12}>
        <Grid item xs={12} md={12}>
            <h2 className='register-heading'>Create an Account</h2>
            <p className='already'>Already have an account? <NavLink to='/login'>Login</NavLink> </p>
            </Grid>

        <Grid item xs={12} md={12}>
      <TextField
      onChange={getUserInfo} 
      name='userName'
      style={{
          width:'420px',
      }} id="outlined-basic" label="Username"
      placeholder='Username'
      variant="outlined" />
         </Grid>
         <Grid item xs={12} md={12}>
      <TextField
      name='email'
      onChange={getUserInfo}
     style={{
        width:'420px',
    }} id="outlined-basic" label="Email"
      placeholder='Email'
      variant="outlined" />
        </Grid>
         <Grid item xs={12} md={12}>
         <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput  style={{
          width:'420px',
      }}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
         <FormControl sx={{}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
          style={{
            width:'420px',
        }}
            id="outlined-adornment-password"
            type={confirmValues.showConfirmPassword ? 'text' : 'password'}
            value={confirmValues.confirmPassword}
            onChange={handleConfirmChange('confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {values.confirmValues ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>

          {values.password === confirmValues.confirmPassword? <Button
        onClick={register}
         style={{
            backgroundColor:'#3BB77E',
            width:'200px',
            height:'50px'
        }} variant="contained">Submit & Register</Button>: <Button
       disabled
         style={{
            backgroundColor:'#3BB77E',
            width:'200px',
            height:'50px'
        }} variant="contained">Submit & Register</Button>}
       
       
       </Grid>
     

        </Grid>
     
      </Grid>
      </Box>

            
        </div>




        <Footer></Footer>


        </div>
    );
};

export default Register;