import React, { useEffect, useState } from 'react';
import './LogIn.css';
import {useHistory,useLocation} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UseAuthFirebase from '../CustomHook/UseAuthFirebase';
import { getAuth, signInWithPopup,GithubAuthProvider,GoogleAuthProvider,onAuthStateChanged } from '@firebase/auth';




const LogIn = () => {
  const auth = getAuth();
  const location = useLocation();
  // console.log("Log in location",location?.state?.from?.pathname);
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const {newUser,logInUser,setNewUser,setErrorMsg,isLoading,setIsLoading, errorMsg, } = UseAuthFirebase();
  const history = useHistory();
 


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
        setIsLoading(true)
        signInWithPopup(auth, googleProvider )
        .then(result=>{
            
            const user = result.user;
            setNewUser(user);
            console.log(user);

          const userAllInfo = {
            email:user?.email,
            fullName:user?.displayName
          }

            
          fetch('https://immense-fjord-66300.herokuapp.com/public/add-google-new-user',{
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
              history.push(location?.state?.from?.pathname||"/dashboard")
            }
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

      const githubLogIn = ()=>{
        
        setIsLoading(false);
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const user = result.user;
          
            setNewUser(user);
            console.log(user);

            const userAllInfo = {
              email:user?.email,
              fullName:user?.displayName
            }

                 
          fetch('https://immense-fjord-66300.herokuapp.com/public/add-google-new-user',{
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
              history.push(location?.state?.from?.pathname||"/dashboard")
            }
        })
        .catch(err=>{
            const error = err.message;
            setErrorMsg(error);
                console.log(err);
        }
        )
        .finally(()=>{
          setIsLoading(false)
        })
        
        



      }



      
      const [email, setEmail] = useState('')

      const emailValue = (e)=>{
        const emailInfo = e.target.value;
        setEmail(emailInfo);

      }




      const logIn = async ()=>{
        
        

        const getUserAllInfo = await logInUser(email, values.password);
        console.log(getUserAllInfo);
    
    

        
        getUserAllInfo(auth, email,values.password).then(result=>{

          const user = result.user;
          console.log(user);
          setNewUser(user);
          
          if (user) {
            history.push(location?.state?.from?.pathname||"/dashboard")
          }
     
          

          

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






      useEffect(()=>{
            
       

        onAuthStateChanged(auth, user=>{
        
          console.log("isloading", isLoading);
           
            if (user) {

                setNewUser(user);
                console.log(user);
             
                console.log("isloading", isLoading);
                

            }
            else{
                setNewUser(" ");
                console.log("User Log Out");
            }
          



        })

        
      


        setIsLoading(false)



    },[newUser])















    return (
   <div>
     <Header></Header>

       <div className="log-in-box">

       


       <div className='log-in-container'>
        
           <div className="login-aside-image">
               <img src="https://i.ibb.co/yP80yXG/login.jpg" alt="" />
           </div>




           <div className="log-in-input-section">
            <h2>Login</h2>
            <p className='create-here'>Don't have an account? <NavLink to='/register'> Create here</NavLink></p>


            <div className='input-field'>
            <TextField 
            onChange={emailValue}
            style={{
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
          <Button
          onClick={logIn}
          
          style={{
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


     
    <Footer></Footer>



       
   </div>
    );
};

export default LogIn;