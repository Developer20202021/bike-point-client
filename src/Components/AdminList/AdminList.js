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
  const [admin, setAdmin] = React.useState([]);
  const [deleteitem, setdeleteItem] = React.useState([]);

  const [getIndex, setIndex] = React.useState(0);




React.useEffect(()=>{

  fetch("https://immense-fjord-66300.herokuapp.com/admin/get-all-admin")
            .then(res=>res.json())
            .then(data=>{
              let i=0;
              let array = [];

              data?.map(sAdmin =>{

                sAdmin.id = i + 1;
                console.log(sAdmin);
                i++;
                console.log(getIndex);
                setIndex(i) ;
                array.push(sAdmin)
                setAdmin([...array]);
                




              })




              // setAdmin(data)
              //   console.log(data);
            }).catch(err=>{
                console.log(err);
            })

            console.log(admin);



},[deleteitem])


const deleteAdmin= ()=>{

  fetch(`https://immense-fjord-66300.herokuapp.com/admin/admin-delete/${productId}`,{
    method:"DELETE"
  })
            .then(res=>res.json())
            .then(data=>{
              setdeleteItem(data)
                console.log(data);
            }).catch(err=>{
                console.log(err);
            })


}





  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  
    { field: 'image', headerName: ' Image',
     width: 170,
     disableClickEventBubbling:true,
     renderCell: (params)=>{
     
  
       return(
         <img src={params.row.image}
         alt='admin' width='50px' height='50px'/>
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
  
  const rows = admin;


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

        {inputValueAdd===String(productId)?<Button
        onClick={deleteAdmin}
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
