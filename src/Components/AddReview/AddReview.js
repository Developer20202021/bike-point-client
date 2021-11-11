import { Alert, Button, IconButton, Input, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './AddReview.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const AddReview = () => {
    const [value, setValue] = React.useState(2);
    const [msg, setMsg] = useState(0);
    const [getInputValue, setInputValue] = useState({name:'',reviewerDescription:''});
    const [getImageFile, setImageFile] = useState();

    const allInput =(e)=>{

      const name = e.target.name;
      const inputValue = e.target.value;
      setInputValue({...getInputValue, [name]:inputValue})

      console.log(getInputValue);




    }




    const productImageUp = (e)=>{
      const fileInfo =e.target.files[0];
      setImageFile(fileInfo);


      console.log(fileInfo.name);
  }



  
  const addProduct = ()=>{

    getInputValue.rating = value;





    const formData = new FormData();
    formData.append('image',getImageFile)
   
   

        fetch('https://api.imgbb.com/1/upload?key=b63eba5fff5f0c407cceba4bd3f16383',{
            method:"POST",
            body:formData
        }).then(res=>res.json())
        .then(data=>{
          
          console.log(data);
          if (data.success) {
            getInputValue.reviewerImage = data.data.display_url;
            getInputValue.reviewerImageDeleteUrl = data.data.delete_url;
          


            fetch('http://localhost:5000/public/reviews',{
              method:"POST",
    
            headers:{
              "Content-Type":"application/json"
            },
              body:JSON.stringify(getInputValue)
            }).then(res=>{
              if (res.status ===200) {
                setMsg(200);
                setInputValue({name:'',reviewerDescription:''})
              }
              else{
                setMsg(500);
                setInputValue({name:'',reviewerDescription:''})
              }
              return res.json()})
            .then(data=>console.log(data))
            .catch(err=>{
              console.log(err);
            })
    
            console.log(getInputValue);





            
          }



            
            
            
            
            
        })






}





















    return (
        <div>

            <div className="addreview-container">

                <div className="addreview-box">
                    <h2>Please Give Me Review</h2>

                    {msg===500?<div>
                      <Alert severity="error">Server Error!!</Alert>
                        </div>:null}

                        {msg===200?<div>
                          <Alert severity="success">Successfully your review is uploaded</Alert>
                        </div>:null}
                        {msg===400?<div>
                          <Alert severity="error">Please fill up the full form</Alert>
                        </div>:null}
                   
                    <div className="text-field-1">
                    <TextField 
                    name='name'
                    value={getInputValue?.name}
                    onChange={allInput}
                    id="outlined-basic" label="Full Name" variant="outlined" />
                    <TextField id="outlined-basic" 
                    type='date'
                    
                   variant="outlined" />
                    </div>
                    <div className="text-field-2">
                    <TextField
                     value={getInputValue?.reviewerDescription}
                    onChange={allInput} 
                    name='reviewerDescription'
                    
                    style={{
                        width:'460px'
                    }}
                    multiline
                    id="outlined-basic" label="Description" variant="outlined" />
                    
                    </div>

                    <div className="upload-image">
                    <label htmlFor="icon-button-file"> Upload Your Image
        <Input onChange={productImageUp} className='upload-image-field' accept="image/*" id="icon-button-file" type="file" />
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
                    <Button
                    onClick={addProduct}
                     style={{
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