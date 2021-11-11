import React from 'react';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import './NotFound.css';

import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const NotFound = () => {

  const history = useHistory();

  const gotoHome = ()=>{
    history.push('/home');
  }




    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <div className='notFoundImage'>
            <img src="https://image.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg" alt="" />
          </div>
        
        </Grid>
        <Grid item xs={12} md={12}>
          <div className="button-notfound-home">
          <Button style={{
            backgroundColor:'#3BB77E',
            width:'200px',
            height:'40px'
            
          }}
          onClick={gotoHome}
          variant="contained" >Go To Home</Button>

          </div>
        
        </Grid>
      
      </Grid>
    </Box>
            
        </div>
    );
};

export default NotFound;