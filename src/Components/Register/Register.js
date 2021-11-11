import React from 'react';
import './Register.css';
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {

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











    return (
        <div>
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
      <TextField style={{
          width:'420px',
      }} id="outlined-basic" label="Username"
      placeholder='Username'
      variant="outlined" />
         </Grid>
         <Grid item xs={12} md={12}>
      <TextField
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
        <Button style={{
            backgroundColor:'#3BB77E',
            width:'200px',
            height:'50px'
        }} variant="contained">Submit & Register</Button>
       
       </Grid>
     

        </Grid>
     
      </Grid>
      </Box>

            
        </div>







        </div>
    );
};

export default Register;