import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';





const Footer = () => {
    return (
        <div>


            <div className="footer-box">

                <div className="footer-containainer">


                    <div className="footer-address">
                        <div className="footer-logo">
                            <img src="https://i.ibb.co/j6Zhf0t/bike-point-logo-1.gif" alt="" width='150px' />
                        </div>
                        <h3>Awesome Bike store website template</h3>
                    <div className="address-f"> 
                    <span className='icon'><AddLocationIcon/></span> 
                    <span className='address-title'>Address:</span> 
                    <span className='address-f-des'>
                    5171 W Campbell Ave undefined Kent, Utah 53127 United States</span> 
                    </div>

                    <div className="address-f">
                         <span className='icon'><CallIcon ></CallIcon></span>
                        <span className='address-title'>Call Us:</span>
                        <span className='address-f-des'>(+91) - 540-025-12455</span>
                      </div>
                    <div className="address-f"> 
                    <span className='icon'><EmailIcon></EmailIcon></span> 
                    <span className='address-title'>Email:</span> 
                    <span className='address-f-des'>
                    sale@Nest.com</span> 
                    </div>
                    <div className="address-f"> 
                    <span className='icon'><AccessTimeIcon></AccessTimeIcon></span> 
                    <span className='address-title'>
                    Hours:</span> 
                    <span className='address-f-des'>10:00 - 18:00, Mon - Sat</span> 
                    
                    </div>


                    </div>

                    <div className="footer-company">
                    <ul className='footer-account-ul'>
                            <li> <NavLink to='/register'> Register </NavLink> </li>
                            <li> <NavLink to='/login'> Log in </NavLink> </li>
                            <li> <NavLink to='/'> Home </NavLink> </li>
                            <li> <NavLink to='/contact'> Contact </NavLink> </li>
                            <li> <NavLink to='/products'> Products </NavLink> </li>
                        </ul>



                    </div>


                    <div className="footer-account">

                        <ul className='footer-account-ul'>
                            <li> <NavLink to='/register'> Register </NavLink> </li>
                            <li> <NavLink to='/login'> Log in </NavLink> </li>
                            <li> <NavLink to='/'> Home </NavLink> </li>
                            <li> <NavLink to='/contact'> Contact </NavLink> </li>
                            <li> <NavLink to='/products'> Products </NavLink> </li>
                        </ul>




                    </div>

                    <div className="install-app-payment">
                        <h2>Download App</h2>

                        <div className="app-container-f">

                            <div className="google-playstore">
                                <img src="https://cdn-images-1.medium.com/max/1600/1*EiZrcN_DIapbZaxutxbZRA.png" alt="" width='150px' />

                            </div>

                            <div className="appleplaystore">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-m2_YgYAdeUtkusL2vgA150-zw9-MZO17rlLr_jW5xX21TxLs-1mUhPmK26btrYcW-d0&usqp=CAU" width='150px' alt="" />

                            </div>



                        </div>


                       



                    </div>





                </div>









            </div>
            
        </div>
    );
};

export default Footer;