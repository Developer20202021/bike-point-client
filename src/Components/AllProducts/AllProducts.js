import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './AllProducts.css'

import { Alert, AlertTitle, Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
 
};




export default function AllProducts() {

  const [deleteData, setDeleteData] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [productId , setProductId] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [getproductInfo , setProductInfo] = React.useState([]);


  React.useEffect(()=>{


    fetch('http://localhost:5000/admin/products').then(res=> res.json())
      .then(data=>{
        setProductInfo(data.data)
        console.log(data.data)
      })
      .catch(err=>{
        console.log(err);
      })





  },[deleteData])
 





  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '_id', headerName: 'Product ID', width: 100 },
  
    { field: 'productImage', headerName: 'Product Image',
     width: 170,
     disableClickEventBubbling:true,
     renderCell: (params)=>{
     
  
       return(
         <img src={params.row.productImage}
         alt='data' width='50px' height='50px'/>
       )
     }
   },
  
  
  
    { field: 'productName', headerName: 'Product Name ', width: 190 },
    
   
 
   
    { field: 'productPrice', headerName: 'Price', width: 100 },
    { field: 'productQuality', headerName: 'Product Quality', width: 190 },
    { field: 'date', headerName: 'Date', width: 190 },
  
   
  
  
    

  
    
  
  
  
  { field: 'delete', headerName: 'Delete',
  width: 170,
  disableClickEventBubbling:true,
  renderCell: (params)=>{
  console.log(params.id);
  const deleteItem = (id)=>{
    setProductId(id)
    handleOpen()
  }
  
  return(
    <Button style={{
        width:'70px',
        fontSize:'11px'
    }} color='error' onClick={()=>deleteItem(params.row._id)} variant="contained">Delete</Button>
  )
  }
  },
  
  
  
  
  
  
  
  
  ];
  
  const rows = getproductInfo;


    const [inputValueAdd, setInputValueAdd] = React.useState('');

  const productIdInput = (e)=>{

    const inputValue = e.target.value;

    setInputValueAdd(inputValue)
  }





  





  const deleteClientProduct = ()=>{
    console.log(productId,inputValueAdd);

    fetch(`http://localhost:5000/admin/product-delete/${productId}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{

      setDeleteData(data)

      console.log(data);
    })

    fetch("")





  }










  return (
    <div>
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[20]}
       
      />


      
    </div>


    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <Alert severity="warning">
      <AlertTitle>Delete</AlertTitle>
       Are You Sure? You want to delete this admin. This admin will be deleted permanently.<strong>Please type  {productId} this </strong>
       </Alert>
       <TextField onChange={productIdInput} style={{
         width:'100%'
       }} id="outlined-basic" label="Admin ID" variant="outlined" />

        {inputValueAdd===String(productId)?<Button
        onClick={deleteClientProduct}
         style={{
         width:'100%',
         marginTop:'20px',
         backgroundColor:'#3BB77E'
       }}  variant="contained">Delete Admin</Button>:<Button style={{
        width:'100%',
        marginTop:'20px',
       
        
      }} color='secondary' variant="contained" disabled>Delete Admin</Button>}

       
        </Box>
      </Modal>
    </div>


    







    </div>
  );
}
