import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import './Navbar.css';
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
    justify-content:space-between;

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
width:220px;
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
margin-left:350px;
margin-bottom:50px;

@media (max-width: 768px) {

  display:none;

}

`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
         <Left>
           <img src="./Images/phone.png" alt="" />
           <span>+91-9999963537</span>
         </Left>
         <Center><img className="image-nav" src="./Images/Name.png" alt="" /></Center>
         <Right>
           <img className="image-nav"  src="./Images/fb.png" alt="" />
           <img className="image-nav" src="./Images/Insta.png" alt="" />
           <img className="image-nav" src="./Images/Link.png" alt="" />
           <img className="image-nav" src="./Images/Mail.png" alt="" />
           <a href="#" class="hidden"></a>
           <a href="#" class="hidden"></a>
           <a href="#" class="hidden"></a>

         </Right>
      </Wrapper>
      <Menu className="Menu">
         <ul>
            <li><NavLink className="linkText" to="/">Home</NavLink></li>
            <li><NavLink className="linkText" to="/about">About Us</NavLink></li>
            <li><NavLink className="linkText" to="/services">Services</NavLink></li>
            <li><NavLink className="linkText" to="/media">Media</NavLink></li>
            <li><NavLink className="linkText" to="/publication">Publications</NavLink></li>
            <li><NavLink className="linkText" to="/contact">Contact Us</NavLink></li>
        </ul>
        
      </Menu>
    </Container >
  )
}

export default Navbar

