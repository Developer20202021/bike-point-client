import React from 'react';
import './Home.css';
import {useHistory} from 'react-router-dom';
import Product from '../Products/Product/Product'
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../Footer/Footer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Slider } from '@mui/material';
import { height } from '@mui/system';
import HomeSlider from './Slider/Slider';

const Home = () => {
    const history = useHistory();

    const moreProducts = ()=>{
        history.push('/products')
    }

    const url = 'https://i.ibb.co/JstgrsQ/Purple-and-Pink-Organic-and-Handcrafted-Welcome-Message-Elementary-Back-to-School-Banner.png';




    return (
        <div>

            <div className="home-box">
            <div className="home-conatiner">

                <div className="slider-box">

                    <div className="slider-container">

            <HomeSlider></HomeSlider>





                    </div>



                </div>

             
                <div className="product-box-home">
                    <h3>Popular Products</h3>
                    <div className="product-home-container">
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>
                       <Product></Product>




                    </div>



                    <div className="more-product">
                    <Button onClick={moreProducts} style={{
                        backgroundColor:'#3BB77E',
                        width:'200px',
                        height:'50px'
                    }} variant="contained">  More Bikes <ArrowRightAltIcon/> </Button>
                    </div>







                </div>

                <div  className="home-subscribe">

                    <img src="https://i.ibb.co/JstgrsQ/Purple-and-Pink-Organic-and-Handcrafted-Welcome-Message-Elementary-Back-to-School-Banner.png" alt="" width='100%' height='400px' />


                    <div className="subscribe-button">

                        <input className='subscribe-input' type="text"  />
                    <Button style={{
                        backgroundColor:'#3BB77E',
                       
                        width:'200px',
                        height:'50px'
                    }} variant="contained">Subscribe</Button>
                    </div>





                </div>
            



                <div className="client-review-home-box">
                    <h3>Our Clients Review</h3>

                
                <div className="client-review-home-container">
                <ClientReview></ClientReview>
                <ClientReview></ClientReview>
                <ClientReview></ClientReview>
                <ClientReview></ClientReview>
                <ClientReview></ClientReview>
                </div>
                </div>





                </div>
            </div>
           




           

            
            <Footer></Footer>
        </div>
    );
};

export default Home;