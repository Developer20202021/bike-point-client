import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css'

const PlaceOrder = () => {

    const {id} = useParams();
    const [getProductInfo, setProductInfo] = useState({});
    const [getProductPrice, setProductPrice] = useState(0)
    console.log(getProductInfo);


    const {productImage,productName} = getProductInfo;

    useEffect(()=>{

        fetch(`http://localhost:5000/public/product/${id}`).then(res=>res.json())
        .then(data=>{
            setProductInfo(data[0])
            setProductPrice(data[0]?.productPrice)
            // console.log(data[0])
        })






    },[])



    // const price = 122;

const [productNumber, setProductNumber] = useState(1);

const [clientInfo, setClientInfo] = useState({});

    const ProductCount = (e)=>{

            const ProductValue = parseInt( e.target.value);
            console.log(typeof ProductValue);
            setProductNumber(ProductValue);
            setProductPrice(ProductValue*parseInt(getProductPrice))
    }


    // console.log(getProductPrice);


    const getClientinfo =(e)=>{

        const name = e.target.name ;
        const value = e.target.value;

        setClientInfo({...clientInfo,[name]:value})


    }

    console.log(clientInfo);



    const orderNow = ()=>{

        clientInfo.productCount = productNumber;

        clientInfo.productImage= productImage;
        clientInfo.productName= productName;
        clientInfo.productPrice = getProductPrice;

        console.log(clientInfo);


        fetch('http://localhost:5000/public/placeorder',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(clientInfo)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log(err);
        })

    }








    return (
        <div>

            <div className="placeorder-box">

                <div className="placeorder-container">



                    <div className="product-info">

                        <div className="product-image-container">
                            <img src={getProductInfo?.productImage} alt="" />

                        </div>

                        <div className="product-des">
                            <p>{getProductInfo?.productDescription}</p>
                            <div className="product-count">
                          <div className="count-number-input">
                          <TextField
                      type='number'
                      onChange={ProductCount}

                      
                      style={{
                          width:'100px'
                      }}  id="standard-basic" variant="outlined" label="Product Count" />
                          </div>
                          <div className="update-product-price"><span className='price'> Price: 
                              ${getProductPrice}</span>
                          </div>
                            </div>
                        </div>




                    </div>




              

                    <div className="your-form-placeorder">
                    <h2 className='shipping-title'>Enter Your Shipping Information</h2>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap' , p:'100px' }}>

                    <Grid container spacing={7}>
                      <Grid item xs={12} md={4}>
                      <TextField
                      onChange={getClientinfo}
                      name='fullname'
                      style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined"label="Full Name" />
                      </Grid>

                      <Grid item xs={12} md={4}>
                      <TextField 
                      name='email'
                       onChange={getClientinfo}
                      style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined"label="Email" />
                      </Grid>


                      <Grid item xs={12} md={4}>
                      <TextField
                       onChange={getClientinfo}
                       name='phoneNumber'
                       style={{
                          width:'70%'
                      }} id="standard-basic" variant="outlined" label="Phone Number"/>
                      </Grid>


                      <Grid item xs={12} md={4}>
                      <TextField
                         onChange={getClientinfo}
                      value={getProductPrice}
                      disabled 
                      style={{
                          width:'70%',
                          color:'black'
                      }} id="standard-basic" variant="outlined" label="Total Price"/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                      <TextField
                      type='number'
                      onChange={getClientinfo}
                      value={productNumber}
                     disabled
                     label='Count'
                      style={{
                          width:'70%',
                          color:'black'
                      }}  id="standard-basic" variant="outlined"  />
                      </Grid>
                      <Grid item xs={12} md={4}>
                      <TextField
                        onChange={getClientinfo}
                      name ='address'
                      multiline
                      style={{
                          width:'70%'
                      }}  id="standard-basic" variant="outlined" label="Address" />
                      </Grid>
                      <Grid  item xs={12} md={12}>
                    <Button
                    onClick={orderNow}
                     style={{
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