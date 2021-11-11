import React from 'react';
import './Product.css'
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Rating, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = () => {
    const history = useHistory();



    const buyNow = (productId)=>{
        
        history.push(`/dashboard/placeorder/${productId}`);

    }












    return (
        <div>
        <div className='product-center'>
            <div className="product-container">

                <div className="product-status-top">
                    <p className='product-top-title'>Hot</p>
                </div>

                <div className="product-image">
                    <img src="https://imgd.aeplcdn.com/642x361/n/cw/ec/103795/yzf-r15-right-front-three-quarter-7.jpeg?isig=0" alt="" width='250px'/>
                </div>

                <div className="product-name">
                    <p>R15 v3 Yamaha</p>
                </div>

                <div className="product-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="product-ratting"> <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value='4' readOnly />

                </div>


                <div className="product-buy">
                    <div className="product-price">$<span className='price'>1000</span> </div>

                    <div className="product-by-now">
                    <Button onClick={()=>buyNow()} style={{
                        backgroundColor:'#3BB77E',
                        fontSize:'12px'
                    }} variant="contained"><AddShoppingCartIcon/>  Buy Now</Button>
                    </div>
                </div>











            </div>
            
        </div>
        </div>
    );
};

export default Product;