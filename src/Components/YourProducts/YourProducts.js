import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './YourProducts.css';
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




export default function YourProducts() {

const [yourOrderInfo, setYourOrderInfo] = React.useState([]);
const [deleteData, setDeleteData] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [productId , setProductId] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



const email = 'mahadikaushik8888@gmail.com'



  React.useEffect(()=>{

    fetch(`http://localhost:5000/public/my-order/?email=${email}`)
    .then(res=>res.json())
    .then(data=>{
      setYourOrderInfo(data)
      console.log(data)
    })
    .catch(err=>{
      console.log(err);
    })




  },[deleteData])




  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
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
  
  
  
    { field: 'fullname', headerName: 'Full Name', width: 190 },
    {
      field: 'productName',
      headerName: 'Product Name',
  
      width: 190,
    },
   
    {
      field: 'productCount',
      headerName: 'Product Count',
      type: 'number',
      width: 190,
    },
    { field: 'date', headerName: 'Date', width: 190 },
    {
      field: 'address',
      headerName: 'My Address',
      width: 290,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 170,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 160,
    },
  
    {
      field: 'productPrice',
      headerName: 'Price',
      width: 140,
    },
  
  
    {
      field: 'status',
      headerName: 'Status',
      width: 190,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
       
       
        return(
          
          <div >
          
          {params.row.status==='Pending'?<p className='pending-status'>{params.row.status}</p>:null}
          {params.row.status==='Canceled'?<p className='canceled-status'>{params.row.status}</p>:null}
          {params.row.status==='Approved'?<p className='approved-status'>{params.row.status}</p>:null}
          {params.row.status==='Shipped'?<p className='shipped-status'>{params.row.status}</p>:null}
          
          </div>
        )
      }
      
    },
  
  
    { field: 'Cancel', headerName: 'Cancel',
    width: 170,
    disableClickEventBubbling:true,
    renderCell: (params)=>{
      const cancelItem = (id)=>{
        // setProductId(id)
        fetch(`http://localhost:5000/public/cancel-order/?id=${id}&email=${email}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({status:"Canceled"})
        })
        .then(res=>res.json())
        .then(data=>{
          setDeleteData(data);
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        })
       
      }
  
  
      return(
        <Button 
        onClick={()=>cancelItem(params?.row?._id)}
        style={{
          width:'70px',
          fontSize:'11px'
      }} color='warning' variant="contained">Cancel</Button>
      )
    }
  },
  
  
  
  { field: 'delete', headerName: 'Delete',
  width: 170,
  disableClickEventBubbling:true,
  renderCell: (params)=>{
  // console.log(params.row._id);
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
  
  
  const rows = yourOrderInfo;


    const [inputValueAdd, setInputValueAdd] = React.useState('');

  const productIdInput = (e)=>{

    const inputValue = e.target.value;

    setInputValueAdd(inputValue)
  }





  



  const deleteClientProduct = ()=>{
    console.log(productId,inputValueAdd);

    fetch(`http://localhost:5000/public/delete-order/?id=${productId}&email=${email}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{

      setDeleteData(data)

      console.log(data);
    })





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
       Are You Sure? You want to delete this Product. This product will be deleted permanently.<strong>Please type  {productId} this </strong>
       </Alert>
       <TextField onChange={productIdInput} style={{
         width:'100%'
       }} id="outlined-basic" label="Product ID" variant="outlined" />

        {inputValueAdd===String(productId)?<Button
        onClick={deleteClientProduct}
        style={{
         width:'100%',
         marginTop:'20px',
         backgroundColor:'#3BB77E'
       }}  variant="contained">Delete</Button>:<Button style={{
        width:'100%',
        marginTop:'20px',
       
        
      }} color='secondary' variant="contained" disabled>Delete</Button>}

       
        </Box>
      </Modal>
    </div>


    







    </div>
  );
}
