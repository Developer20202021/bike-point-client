import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div>

            <div className="placeorder-box">

                <div className="placeorder-container">



                    <div className="product-info">

                        <div className="product-image-container">
                            <img src="https://image.freepik.com/free-vector/realistic-ad-with-product-landing-page_52683-70870.jpg" alt="" />

                        </div>

                        <div className="product-des">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque, obcaecati commodi tenetur nam quidem quia perferendis architecto et? Neque, dolor in. Deserunt magni enim tenetur praesentium quod? Cum, assumenda!</p>
                            <div className="product-count">
                          <div className="count-number-input">
                          <TextField
                      type='number'
                      
                      style={{
                          width:'100px'
                      }}  id="standard-basic" variant="outlined" label="Product Count" />
                          </div>
                          <div className="update-product-price"><span className='price'> Price: 
                              $122</span>
                          </div>
                            </div>
                        </div>




                    </div>




              

                    <div className="your-form-placeorder">
                    <h2 className='shipping-title'>Enter Your Shipping Information</h2>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap' , p:'100px' }}>

                    <Grid container spacing={7}>
                      <Grid item xs={12} md={4}>
                      <TextField style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined"label="Full Name" />
                      </Grid>

                      <Grid item xs={12} md={4}>
                      <TextField style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined"label="Email" />
                      </Grid>


                      <Grid item xs={12} md={4}>
                      <TextField style={{
                          width:'70%'
                      }} id="standard-basic" variant="outlined" label="Phone Number"/>
                      </Grid>


                      <Grid item xs={12} md={4}>
                      <TextField  style={{
                          width:'70%'
                      }} id="standard-basic" variant="outlined" label="Price"/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                      <TextField
                      type='number'
                      
                      style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined" label="Product Count" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                      <TextField
                  
                      multiline
                      style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined" label="Address" />
                      </Grid>
                      <Grid  item xs={12} md={12}>
                    <Button style={{
                        backgroundColor:'#3BB77E'
                        ,
                        width:'200px'
                    }} variant="contained">Order </Button>

                      </Grid>
                     
                    </Grid>
                  
                    



                        </Box>



                    </div>





















                </div>









            </div>






            
        </div>
    );
};

export default PlaceOrder;