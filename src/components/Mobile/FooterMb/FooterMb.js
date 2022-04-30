
import { styled } from '@mui/system';
import React from 'react'
import './FooterMb.css'
import { NavLink } from "react-router-dom";

const Footer_mb = () => {


   
    
  return (
    <div className="ContainMb">
        <div className="content-container">

            <div className="contact-contents">
                <h2>Contact Us</h2>
                <div className="footer-lists">
                
                <div className="first-row">
                <img src="./Images/Telephone.png"></img>
            <span>+91-9999963537</span>
            </div>
          
            <div className="second-row">
            <img src="./Images/Group 188.png"></img>
            <span>R - 255, 2nd Floor, G K- 1, Delhi - 110048</span>
            </div>

            <div className="third-row">
            <img src="./Images/Group 188.png"></img>
            <span>123, lane, opp. Sai Temple, Emerald Hills, Dehradun- 248001</span>
            </div>
                </div>
            </div>

            <div className="second-contact-contents">
                <h2>Useful Links</h2>
                <div className="footer-lists">

                <ul>
          <li>
            <NavLink className="linkText" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="linkText" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="linkText" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="linkText" to="/media">
              Media
            </NavLink>
          </li>
          <li>
            <NavLink className="linkText" to="/album">
              Album
            </NavLink>
          </li>
          <li>
            <NavLink className="linkText" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="linkText" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>

                    </div>

            </div>





        </div>

        <div className="social-icons-contain">
        <div className="social-icons-mb">

           <img className="image-nav" src="./Images/fb.png" alt="" />
           <img className="image-nav" src="./Images/Insta.png" alt="" />
           <img className="image-nav" src="./Images/Link.png" alt="" />
           <img className="image-nav" src="./Images/Mail.png" alt="" />

        </div>

        <div className="footer-mb">
             <span>copyright@sohnijuneja.com</span>
         </div>
         </div>
         



    </div>
  )
}

export default Footer_mb