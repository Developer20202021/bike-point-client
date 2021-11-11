import { Button, IconButton, Input, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import './AddReview.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const AddReview = () => {
    const [value, setValue] = React.useState(2);






    return (
        <div>

            <div className="addreview-container">

                <div className="addreview-box">
                    <h2>Please Give Me Review</h2>
                    <div className="text-field-1">
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                    <TextField id="outlined-basic" 
                    type='date'
                    
                   variant="outlined" />
                    </div>
                    <div className="text-field-2">
                    <TextField style={{
                        width:'460px'
                    }}
                    multiline
                    id="outlined-basic" label="Description" variant="outlined" />
                    
                    </div>

                    <div className="upload-image">
                    <label htmlFor="icon-button-file"> Upload Your Image
        <Input className='upload-image-field' accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
                    </div>

                    <div className="rating">
                  
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
                    </div>

                    <div className="add-review-button">
                    <Button style={{
                        width:'400px',
                        height:'42px',
                        backgroundColor:'#3BB77E'
                    }} variant="contained">Give Review</Button>
                    </div>



















                </div>













            </div>



            
        </div>
    );
};

export default AddReview;