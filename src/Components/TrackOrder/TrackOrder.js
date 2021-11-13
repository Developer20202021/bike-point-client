import React, { useEffect, useState } from 'react';
import './TrackOrder.css';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';














const TrackOrder = () => {





    const [seeOrder, setSeeOrder] = useState([]);

    const [productId, setProductId] = useState('');

    const getInputproductId = (e)=>{

        const value = e.target.value;
        setProductId(value);




    }



    const getProductStatus = ()=>{
        fetch(`https://immense-fjord-66300.herokuapp.com/public/tract-order/${productId}`)
        .then(res=>res.json())
        .then(data=>{

            setSeeOrder(data[0])
            setProductId('');
            console.log(data[0]);
        })
    }













    















    return (

        <div>
            <div className="track-order-box">
            <Grid container spacing={2}>
              <Grid item md={6} lg={6} xs={12}>
                <div className="track-box">
                <div className="track-title">
                      <h2>Track Your Order</h2>
                  </div>
                  <div className="input-track-container">
                      <div className="text-field-track">
                      <TextField
                      value={productId}
                      onChange={getInputproductId}
                       id="outlined-basic" label="Product ID" variant="outlined" />
                      </div>
                      <div className="track-button">
                      <Button
                      onClick={getProductStatus} 
                      style={{
                          width:"100%",
                          backgroundColor:"#3BB77E"
                      }}
                      variant="contained">Track Order</Button>
                      </div>




                  </div>
                </div>

              </Grid>

              <Grid item md={6} lg={6} xs={12}>


                  <div className='track-product-info'>

                     <div className="product-id">
                         <span className='t-title'>Product ID:</span>
                         <span className='id'>{seeOrder?._id}</span>
                     </div>
                     <div className="product-name">
                         <span className='t-title'>Product Name:</span>
                         <span className='id'>{seeOrder?.productName}</span>
                     </div>
                     <div className="product-status">
                         <span className='t-title'>Status:</span>
                         {seeOrder?.status==="Approved"?<span className='status-approved'>{seeOrder?.status}</span>:null}
                         {seeOrder?.status==="Canceled"?<span className='status-Canceled'>{seeOrder?.status}</span>:null}
                         {seeOrder?.status==="Shipped"?<span className='status-Shipped'>{seeOrder?.status}</span>:null}
                         {seeOrder?.status==="Pending"?<span className='status-Pending'>{seeOrder?.status}</span>:null}
                      
                     </div>
            


                  </div>




              </Grid>

            </Grid>







            </div>
            
        </div>
    );
};

export default TrackOrder;