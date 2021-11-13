import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, AlertTitle, Button, Modal, TextField} from '@mui/material';
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




export default function ManageOrders() {

const [clientProductInfo, setClientProductInfo] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [productId , setProductId] = React.useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteData, setDeleteData] = React.useState('');
  const [getIndex, setIndex] = React.useState(0);

  React.useEffect(()=>{

    fetch("https://immense-fjord-66300.herokuapp.com/admin/all-orders")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      let i=0;
      let array = [];
      data?.map(order=>{

        order.id = i + 1;
        console.log(order);
        i++;
        setIndex(i) ;
        array.push(order);
        setClientProductInfo([...array]);


      })













      
    }).catch(err=>{
      console.log(err);
    })

  },[deleteData])





  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '_id', headerName: 'Product ID', width: 70 },
  
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
    { field: 'email', headerName: 'Email', width: 190 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 190 },
    { field: 'date', headerName: 'Date', width: 190 },
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
    {
      field: 'date',
      headerName: 'Date',
      width: 190,
    },
    {
      field: 'address',
      headerName: 'My Address',
      width: 290,
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
  
  
    { field: 'approve', headerName: 'Approve',
    width: 170,
    disableClickEventBubbling:true,
    renderCell: (params)=>{
      // console.log(params);
      const approveItem = (id)=>{
        // setProductId(id)
        fetch(`https://immense-fjord-66300.herokuapp.com/admin/cancel-order/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({status:"Approved"})
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
        onClick={()=> approveItem(params?.row?._id)}
        style={{
          width:'70px',
          fontSize:'11px'
      }} color='info' variant="contained">Approve</Button>
      )
    }
  },
    { field: 'shipped', headerName: 'Shipped',
    width: 170,
    disableClickEventBubbling:true,
    renderCell: (params)=>{
      // console.log(params);
      const shippedItem = (id)=>{
        // setProductId(id)
        fetch(`https://immense-fjord-66300.herokuapp.com/admin/cancel-order/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({status:"Shipped"})
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
        onClick={()=>shippedItem(params?.row?._id)}
        
        style={{
          width:'70px',
          fontSize:'11px'
      }} color='success' variant="contained">Shipped</Button>
      )
    }
  },
    { field: 'cancel', headerName: 'Cancel',
    width: 170,
    disableClickEventBubbling:true,
    renderCell: (params)=>{
      // console.log(params);
      const cancelItem = (id)=>{
        // setProductId(id)
        fetch(`https://immense-fjord-66300.herokuapp.com/admin/cancel-order/${id}`,{
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
  // console.log(params.id);
  const deleteItem = (id)=>{
    setProductId(id)
    handleOpen()
  }
  
  return(
    <Button style={{
        width:'70px',
        fontSize:'11px'
    }} color='error' onClick={()=>deleteItem(params?.row?._id)} variant="contained">Delete</Button>
  )
  }
  },
  
  
  
  
  
  
  
  
  ];
  
  const rows = clientProductInfo;


    const [inputValueAdd, setInputValueAdd] = React.useState('');

  const productIdInput = (e)=>{

    const inputValue = e.target.value;

    setInputValueAdd(inputValue)
  }







  const deleteClientProduct = ()=>{
    console.log(productId,inputValueAdd);

    fetch(`https://immense-fjord-66300.herokuapp.com/admin/delete-order/${productId}`,{
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
