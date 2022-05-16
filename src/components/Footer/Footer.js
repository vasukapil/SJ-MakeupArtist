import styled from '@emotion/styled'
import React from 'react'
import './Footer.css'
import FooterMb from '../Mobile/FooterMb/FooterMb'
import { NavLink } from "react-router-dom";

const MobileContainer=styled.div`

width:100%;



`

const MbFooter=styled.div`

display:none;

@media (max-width: 768px) {

    display:block;

}

`

const OuterRight=styled.div`

   

`
const Container = styled.div`

height:360px;
background-color:rgba(241, 241, 241, 1);

h1{
    font-size:24px;
    text-align:center;
    margin-top:80px;
    padding:10px;

}

.footer{

    margin-left:620px;
    margin-top:29px;

    @media (max-width: 768px) {
        display:none;
    }
}

@media (max-width: 768px) {

   display:none;
  
}





`
const Contacts=styled.div`

height:100px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
justify-content:center;
allign-items:center;

span{
    margin-right:66px;
    margin-top:49px;
    font-size:20px;
    margin-left:15px;
}

@media (max-width: 768px) {
 
    height:52px;
    
}


`

const Wrapper=styled.div`

    ul{
        display:flex;
        justify-content:space-between;
        width:900px;
        margin:0px auto;
        margin-bottom:52px;
        list-style:none;
        padding:10px 5px;
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;

    }

    @media (max-width: 768px) {

        ul{
            display:flex;
            flex-direction:column;
            order:2;
            font-size:12px;
            width:100%;

 
    }

`

const Right=styled.div`

margin-left:620px;
margin-right:-100px;

@media (max-width: 768px) {

    display:none;
}



`
const Content=styled.div`

.Container2{
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;

    margin:auto;
    width:90%;

    span{
        font-size: 18px;
    }
}




.checkh1{
    display:none;
}

@media (max-width: 768px) {
        .Container2{
            display:flex;
            flex-direction:column;
            width:90%;
            order:1;
 
        }
         .checkh1{
                display:block;
         }
        .Container2 span{
            width: 139px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            margin-right:0;
        }
        h1{
            font-size:16px;
        }
}





`





const Footer = () => {
  return (
      <>
      <MobileContainer>
    <Container>
        <div className="mb-first">
        <h1>Useful Links</h1>
        <Wrapper>
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
            <a className="linkText" href="https://sohnijuneja.com/blog">Blog</a>
              
          
          </li>
          <li>
            <NavLink className="linkText" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
        </Wrapper>
        </div>
     
        <Content >
            <div className="check">
                <h1 className="checkh1">Contact Us</h1>
            <div className="Container2">
                
        <Contacts className="content">
            <img src="./Images/Telephone.png"></img>
            <span><a style={{color:'black'}} href="tel:+91-9999963537">+91-9999963537</a></span>
        </Contacts>
        <Contacts className="content">
        <img src="./Images/Group 188.png"></img>
            <span>R - 255, 2nd Floor, G K- 1, Delhi - 110048</span>
        </Contacts>
        <Contacts className="content">
        <img src="./Images/Group 188.png"></img>
            <span>123, lane, opp. Sai Temple, Emerald Hills, Dehradun- 248001</span>
        </Contacts>

        </div>
        </div>

        <Right>
           <img className="image-nav" src="./Images/fb.png" alt="" />
           <img className="image-nav" src="./Images/Insta.png" alt="" />
           <img className="image-nav" src="./Images/Link.png" alt="" />
           <img className="image-nav" src="./Images/Mail.png" alt="" />
           
         </Right>
         <div className="footer">
             <span>copyright@sohnijuneja.com</span>
         </div>
         
         </Content>
        
         
    </Container>

    </MobileContainer>

    <MbFooter>
         <FooterMb/>
   </MbFooter>



    </>
  )
}

export default Footer