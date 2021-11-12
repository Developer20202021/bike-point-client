import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import UseAuthFirebase from '../CustomHook/UseAuthFirebase';
import './AddAdmin.css';

const AddAdmin = () => {

    const {newUser,logInUser,setNewUser,setErrorMsg, errorMsg, } = UseAuthFirebase();
    const [getAdminEmail, setAdminEmail] = useState('');

    const adminEmail = (e)=>{

            const value = e.target.value;
            setAdminEmail(value);


    }


    const addNewAdmin = ()=>{
        

            fetch(`http://localhost:5000/admin/add-new-admin?oldAdminEmail=${newUser?.email}&&newAdminEmail=${getAdminEmail}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:getAdminEmail})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            }).catch(err=>{
                console.log(err);
            })

    }
 




    return (
        <div>


            <div className="add-admin-box">


                <div className="add-admin-container">


                <div className="input-field-add-admin">
                <TextField 
                onChange={adminEmail}
                style={{
                   width:'200%'
                }}  id="standard-basic" label="Enter New Admin Email" variant="outlined" />
                </div>

                <div className="addAdmin-button">
                <Button 
                onClick={addNewAdmin}
                style={{
                     width:'200%',
                    backgroundColor:'#3BB77E'
                }} variant="contained">Add New Admin</Button>
                </div>







                </div>


















            </div>





            
        </div>
    );
};

export default AddAdmin;