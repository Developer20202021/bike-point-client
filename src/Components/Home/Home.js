import React, { useEffect, useState } from 'react';
import './Home.css';
import {useHistory} from 'react-router-dom';
import Product from '../Products/Product/Product'
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../Footer/Footer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Slider } from '@mui/material';
import { height } from '@mui/system';
import HomeSlider from './Slider/Slider';
import Header from '../Header/Header';

const Home = () => {
    const history = useHistory();

    const moreProducts = ()=>{
        history.push('/products')
    }

    const url = 'https://i.ibb.co/JstgrsQ/Purple-and-Pink-Organic-and-Handcrafted-Welcome-Message-Elementary-Back-to-School-Banner.png';





    const [products, setProducts] = useState([]);

    const [reviewers, setReviewers] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/public/home/product')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
           
        })
        .catch(err=>{
            console.log(err);
        })

        fetch('http://localhost:5000/public/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviewers(data);
           
        })
        .catch(err=>{
            console.log(err);
        })




    },[])

    const [getSubscriberEmail, setSubscriberEmail] = useState('')

        const subscriberEmail = (e)=>{
            setSubscriberEmail(e.target.value)
                 }
    const subscribe = ()=>{

        fetch('http://localhost:5000/public/subscriber',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({SubscriberEmail:getSubscriberEmail})
        })
        .then(res=>{
            if (res.status===200) {
                setSubscriberEmail(' ')
            }
            if (res.status===400) {
                setSubscriberEmail(' ')
            }
            return res.json()
        })
        .then(data=>console.log(data))



    }





    return (
        <div className='header-main'>
            <Header></Header>

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
                    {products.length>0?products.map(product=><Product value={product}></Product>):null}
                      




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

                        <input
                        value={getSubscriberEmail}
                         onChange={subscriberEmail} className='subscribe-input' type="text"  />
                    <Button
                    onClick={subscribe} 
                     style={{
                        backgroundColor:'#3BB77E',
                       
                        width:'200px',
                        height:'50px'
                    }} variant="contained">Subscribe</Button>
                    </div>





                </div>
            



                <div className="client-review-home-box">
                    <h3>Our Clients Review</h3>

                
                <div className="client-review-home-container">

                    {reviewers.length>0?reviewers.map(reviewer=> <ClientReview value={reviewer}></ClientReview>):null}




                
                </div>
                </div>





                </div>
            </div>
           




           

            
            <Footer></Footer>
        </div>
    );
};

export default Home;