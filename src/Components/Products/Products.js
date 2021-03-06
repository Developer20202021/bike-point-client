import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from './Product/Product';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Products = () => {


    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://immense-fjord-66300.herokuapp.com/public/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            console.log(data)
        })




    },[])













    return (
        <div>

            <Header></Header>

            <div className="all-product-box">

            

            <div className="allproducts-container"> 

          {products.length>0?products.map(product=><Product value={product}></Product>):null}
            

            </div>


            </div>


            <Footer></Footer>



           
            
        </div>
    );
};

export default Products;