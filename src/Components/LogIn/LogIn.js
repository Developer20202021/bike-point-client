import React from 'react';
import './LogIn.css';
import {NavLink} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';

const LogIn = () => {


    const [values, setValues] = React.useState({     
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };



      const googleLogin = ()=>{

      }

      const githubLogIn = ()=>{

      }
      














    return (
   <div>

       <div className="log-in-box">

       


       <div className='log-in-container'>
        
           <div className="login-aside-image">
               <img src="https://i.ibb.co/yP80yXG/login.jpg" alt="" />
           </div>




           <div className="log-in-input-section">
            <h2>Login</h2>
            <p className='create-here'>Don't have an account? <NavLink to='/register'> Create here</NavLink></p>


            <div className='input-field'>
            <TextField style={{
                width:'100%'
            }} id="outlined-basic" label="Email" 
            placeholder='Email'
            variant="outlined" />
            </div>
          <div className='input-field'>
          <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          placeholder='Password'
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
          </div>
          <div className='log-in-button'>
          <Button style={{
              backgroundColor:'#3BB77E',
              width:'100%',
              height:'40px',
              fontSize:'17px'
          }} variant="contained">Log in</Button>
          </div>

          <div className="another-login">
              <div className="google-log-in-button">
                  <img onClick={googleLogin} src="https://freesvg.org/img/1534129544.png" alt="" width='40px' />
              </div>
              <div className="github-log-in-button">
                  <img onClick={githubLogIn} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width='40px' height='40px'/>
              </div>
          </div>










           </div>

           
















       </div>

       </div>




       
   </div>
    );
};

export default LogIn;