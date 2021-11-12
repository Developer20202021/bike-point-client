import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";





const Header = () => {
    return (
        <div>

            <div className="header-container">
                <div className="header-box">


                    <div className="logo-h-container">
                        <img src="https://i.ibb.co/j6Zhf0t/bike-point-logo-1.gif" alt="" width="100px" height="100px"/>
                    </div>


                    <div className="all-link-container">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                        <NavLink to='/'>Contact Us</NavLink>
                        <NavLink to='/login'>Log In</NavLink>
                        <NavLink to='/register'>Register</NavLink>

                    </div>






                </div>
            </div>
            
        </div>
    );
};

export default Header;