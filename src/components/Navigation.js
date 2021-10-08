import React from 'react';
import Logo from './Assets/linkedlegacylgk.png'
 
import { NavLink, Link } from 'react-router-dom';

const navLinkStyles = {
   fontSize: '25px',
   color: 'gold'
}
 
const Navigation = () => {
    return (
       <div>
         <Link to ="/"> <img src = {Logo} alt="logo" /></Link>;
          <NavLink style={navLinkStyles} to="/">Home</NavLink>
          <NavLink style={navLinkStyles} to="/Gmcampaignlist">Join Campaign</NavLink>
          <NavLink style={navLinkStyles} to="/Portal">Login/Signup</NavLink>
     
       </div>
    );
}
 
export default Navigation;