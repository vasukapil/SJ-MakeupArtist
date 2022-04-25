import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import './Navbar.css';
import 'react-modern-drawer/dist/index.css'

const Container = styled.div`

height : 20%;

@media (max-width: 768px) {
  flex-direction: column;
  width:100vw;
  overflow:hidden;
  
}

`;
const Wrapper=styled.div`
 padding : 25px 22px;
 display : flex;
 justify-content:space-between;

 @media (max-width: 768px) {

    display:flex;
    align-items:center;
    justify-content:space-around;

 }


`;

const Left=styled.div`


@media (max-width: 768px) {

  span{
  display:none;
  }

  img{
    width:20.89px;
    height:20.93px;
  }

}
span{
  font-size: 18px;
  padding-left:0.5em;

  


}
`
const Center=styled.div`
  

@media (max-width: 768px) {
  
  img{
height:3.625rem;
    margin-top:0;
    padding-right:0;

  }
}
`
const Right=styled.div`

  .hidden{
    display:none;
  }
  @media (max-width: 768px) {
    img{
      display:none;
    }
    .hidden{

     width:34px;
     height: 0px;
     border: 1px solid #000000;
      display:block;
      margin-bottom:10px;
      cursor:pointer;
    }
    
  }

`
const Menu=styled.div`
width:100%;
margin-left:280px;
margin-bottom:50px;

 ul li:first-child{
  font-weight: 600;
  font-size: 22px;
  font-family: 'Roboto';
font-style: normal;



 }

 ul li:not(:first-child){

  font-weight: 400;
   font-size: 18px;
  margin:13.75px;
  font-family: 'Roboto';
font-style: normal;


 }
@media (max-width: 768px) {
  display:none;
}
`;
const Menu2=styled.div`
width:100%;
margin-left:280px;
margin-bottom:50px;

 ul li:first-child{
  font-weight: 600;
  font-size: 22px;
  font-family: 'Roboto';
font-style: normal;



 }

 ul li:not(:first-child){

  font-weight: 400;
   font-size: 18px;
  margin:13.75px;
  font-family: 'Roboto';
font-style: normal;


 }
@media (max-width: 768px) {

  // display:none;
  margin: 0;
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: white;
  transition: 0.3s;
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin-left: 40px;
        margin-top:30px;
padding:0;
  }
  li{
    border: none;
    margin-left: 0 !important;
    margin-bottom:15px !important;
    border-right-style: hidden;
padding:0;
border-right-style: hidden !important;

  }
  a{
    margin:0;
  }
}
`


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  return (
    <Container>
      <Wrapper>
         <Left>
           <img src="./Images/phone.png" alt="" />
           <span>+91-9999963537</span>
         </Left>
         <Center><img className="image-nav" src="./Images/Name.png" alt="" /></Center>
         <Right>
           <div className="conn" onClick={toggleDrawer}>
           <img className="image-nav"  src="./Images/fb.png" alt="" />
           <img className="image-nav" src="./Images/Insta.png" alt="" />
           <img className="image-nav" src="./Images/Link.png" alt="" />
           <img className="image-nav" src="./Images/Mail.png" alt="" />
           <a href="#" class="hidden"></a>
           <a href="#" class="hidden"></a>
           <a href="#" class="hidden"></a>
           </div>
         </Right>
      </Wrapper>

      <div className="borderLine">

      </div>
      <Menu className="Menu">
         <ul>
            <li><NavLink className="linkText" to="/">Home</NavLink></li>
            <li><NavLink className="linkText" to="/about">About Us</NavLink></li>
            <li><NavLink className="linkText" to="/services">Services</NavLink></li>
            <li><NavLink className="linkText" to="/media">Media</NavLink></li>
            <li><NavLink className="linkText" to="/album">Album</NavLink></li>
            <li><NavLink className="linkText" to="/blog">Blog</NavLink></li>
            <li><NavLink className="linkText" to="/contact">Contact Us</NavLink></li>
        </ul>
        
      </Menu>
      <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='blablabla'
            >
      <Menu2 className="Menu">
         <ul>
            <li><NavLink className="linkText" to="/">Home</NavLink></li>
            <li><NavLink className="linkText" to="/about">About Us</NavLink></li>
            <li><NavLink className="linkText" to="/services">Services</NavLink></li>
            <li><NavLink className="linkText" to="/media">Media</NavLink></li>
            <li><NavLink className="linkText" to="/album">Album</NavLink></li>
            <li><NavLink className="linkText" to="/blog">Blog</NavLink></li>
            <li><NavLink className="linkText" to="/contact">Contact Us</NavLink></li>
        </ul>
        
      </Menu2>
      </Drawer>

    </Container >
  )
}

export default Navbar

