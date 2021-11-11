import React from 'react';
import './Product.css'
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Rating, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = (props) => {
   
    const {value} = props;
    const {productDescription,productName, productPrice,productQuality, rating,productImage,_id} = value;
    const history = useHistory();
    console.log(value);



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
                    <img src={productImage} alt="" width='250px'/>
                </div>

                <div className="product-name">
                    <p>{productName}</p>
                </div>

                <div className="product-description">
                    <p>{productDescription.slice(0,60)}</p>
                </div>

                <div className="product-ratting"> <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={rating} readOnly />

                </div>


                <div className="product-buy">
                    <div className="product-price">$<span className='price'>{productPrice}</span> </div>

                    <div className="product-by-now">
                    <Button onClick={()=>buyNow(_id)} style={{
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