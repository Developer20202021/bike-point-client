import React from 'react';
import './ClientReview.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ClientReview = () => {
    return (
        <div>
            <div className="client-review-box">

            <div className="client-review-container">

                <div className="client-review-info">
                    <div className="client-image">
                        <img src="https://image.freepik.com/free-photo/pretty-lady-posing-while-touching-hair-red-blouse-looking-cheerful-front-view_176474-106331.jpg" alt="" />
                    </div>
                    <div className="all-info-client">
                        <div className="client-rating">
                        <Rating name="read-only" value='5' readOnly />

                        </div>
                        <div className="client-name">
                            Name Surname 
                        </div>
                    </div>

                </div>

                <div className="client-short-review-description">



                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum quis ipsam laudantium rem, nemo eligendi architecto beatae nesciunt ad, minus voluptatem accusantium incidunt maxime!</p>





                </div>






            </div>

            </div>

            
        </div>
    );
};

export default ClientReview;