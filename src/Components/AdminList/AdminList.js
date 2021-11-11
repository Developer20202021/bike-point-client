import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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




export default function AdminList() {



  const [open, setOpen] = React.useState(false);
  const [productId , setProductId] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);







  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  
    { field: 'image', headerName: ' Image',
     width: 170,
     disableClickEventBubbling:true,
     renderCell: (params)=>{
     
  
       return(
         <img src={params.row.image}
         alt='data' width='50px' height='50px'/>
       )
     }
   },
  
  
  
    { field: 'fullName', headerName: 'Full Name', width: 190 },
    
   
 
   
    { field: 'email', headerName: 'Email', width: 190 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 190 },
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
    }} color='error' onClick={()=>deleteItem(params.id)} variant="contained">Delete</Button>
  )
  }
  },
  
  
  
  
  
  
  
  
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, productImage:'https://image.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg', status:'Pending' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , productImage:'https://image.freepik.com/free-vector/product-podium-with-green-paper-cut-tropical-monstera-palm-leaf-green-background-modern-mockup-template-advertising-vector-illustration-eps10_87521-3314.jpg',
  status:'Approved'},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status:'Canceled' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status:'Shipped',  },
  ];


    const [inputValueAdd, setInputValueAdd] = React.useState('');

  const productIdInput = (e)=>{

    const inputValue = e.target.value;

    setInputValueAdd(inputValue)
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

        {inputValueAdd===String(productId)?<Button style={{
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