import React from 'react';
import './ClientReview.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ClientReview = (props) => {

    const {value} = props;
  

    const {name,rating, reviewerDescription,reviewerImage,_id} = value;




    return (
        <div>
            <div className="client-review-box">

            <div className="client-review-container">

                <div className="client-review-info">
                    <div className="client-image">
                        <img src={reviewerImage} alt="" />
                    </div>
                    <div className="all-info-client">
                        <div className="client-rating">
                        <Rating name="read-only" value={rating} readOnly />

                        </div>
                        <div className="client-name">
                            {name}
                        </div>
                    </div>

                </div>

                <div className="client-short-review-description">



                    <p>{reviewerDescription?.slice(0,200)}</p>





                </div>






            </div>

            </div>

            
        </div>
    );
};

export default ClientReview;