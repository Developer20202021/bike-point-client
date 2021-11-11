import { Alert, Button, IconButton, Input, Rating, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

import PhotoCamera from '@mui/icons-material/PhotoCamera';


const AddProduct = () => {
    const [value, setValue] = React.useState(2);

    const [getProInfo , setProInfo ] = useState({productDescription:"", productName:"",productPrice:"",productQuality:""});
    const [getImageFile, setImageFile] = useState();
    const [msg, setMsg] = useState(0);

  

    const proInfo = (e)=>{

            const name = e.target.name;
            const value = e.target.value;
            setProInfo({...getProInfo, [name]:value});
          
    }
    console.log(getProInfo);

    const productImageUp = (e)=>{
        const fileInfo =e.target.files[0];
        setImageFile(fileInfo);


        console.log(fileInfo.name);
    }
        




    const addProduct = ()=>{

        getProInfo.rating = value;
    




        const formData = new FormData();
        formData.append('image',getImageFile)
       
       

            fetch('https://api.imgbb.com/1/upload?key=b63eba5fff5f0c407cceba4bd3f16383',{
                method:"POST",
                body:formData
            }).then(res=>res.json())
            .then(data=>{
              
              console.log(data);
              if (data.success) {
                getProInfo.productImage = data.data.display_url;
                getProInfo.productImageDeleteUrl = data.data.delete_url;
              
   

                fetch('http://localhost:5000/public/product',{
                  method:"POST",
        
                headers:{
                  "Content-Type":"application/json"
                },
                  body:JSON.stringify(getProInfo)
                }).then(res=>{
                  if (res.status ===200) {
                    setMsg(200);
                    setProInfo({productDescription:"", productName:"",productPrice:"",productQuality:""})
                  }
                  else{
                    setMsg(500);
                    setProInfo({productDescription:"", productName:"",productPrice:"",productQuality:""})
                  }
                  return res.json()
                })
                .then(data=>console.log(data))
                .catch(err=>{
                  console.log(err);
                })
        
                console.log(getProInfo);





                
              }



                
                
                
                
                
            })






    }
   






    return (
        <div>

            <div className="addreview-container">

                <div className="addreview-box">
                    <h2>Add New Product</h2>
                    {msg===500?<div>
                      <Alert severity="error">Server Error!!</Alert>
                        </div>:null}

                        {msg===200?<div>
                          <Alert severity="success">Successfully your Product is uploaded</Alert>
                        </div>:null}
                        {msg===400?<div>
                          <Alert severity="error">Please fill up the full form</Alert>
                        </div>:null}
                    <div className="text-field-1">
                    <TextField
                    onChange={proInfo} 
                    name ='productName'
                    value={getProInfo?.productName}
                      style={{
                        width:'230px'
                    }} id="outlined-basic" label="Product Name" variant="outlined" />
                    <TextField 
                    
                    onChange ={proInfo}
                     style={{
                        width:'230px'
                    }} id="outlined-basic" 
                    type='date'
                    
                   variant="outlined" />
                    </div>

                    <div className="text-field-1">
                    <TextField 
                    onChange={proInfo}
                    name ='productPrice'
                    value={getProInfo?.productPrice}
                    id="outlined-basic" 
                    type='number'
                    
                    label="Product Price" variant="outlined" />
                    <TextField
                    value={getProInfo?.productQuality}
                    onChange={proInfo}
                    name ='productQuality'
                    id="outlined-basic" 
                   label='Product Quality' 
                   variant="outlined" />
                    </div>
                    <div className="text-field-2">
                    <TextField
                    value={getProInfo?.productDescription}
                    onChange ={proInfo}
                    name = 'productDescription'
                     style={{
                        width:'460px'
                    }}
                    multiline
                    id="outlined-basic" label="Product Description" variant="outlined" />
                    
                    </div>
                  

                    <div className="upload-image">
                    <label htmlFor="icon-button-file"> Upload Product Image
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
                    }} variant="contained">Add</Button>
                    </div>



















                </div>













            </div>



            
        </div>
    );
};

export default AddProduct;