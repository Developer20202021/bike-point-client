import { Button, TextField } from '@mui/material';
import React from 'react';
import './AddAdmin.css';

const AddAdmin = () => {
    return (
        <div>


            <div className="add-admin-box">


                <div className="add-admin-container">


                <div className="input-field-add-admin">
                <TextField 
                style={{
                   width:'200%'
                }}  id="standard-basic" label="Enter New Admin Email" variant="outlined" />
                </div>

                <div className="addAdmin-button">
                <Button style={{
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