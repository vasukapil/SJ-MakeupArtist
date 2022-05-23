import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "./Navbar.css";
import "react-modern-drawer/dist/index.css";
import { removeClass } from "dom-helpers";
import { getPanelId } from "@mui/base";

const Container = styled.div`
  height: 20%;

  @media (max-width: 768px) {
    flex-direction: column;
    
    width: 100vw;
    overflow: hidden;
  }
`;
const Extreme=styled.div`
display:none;
@media (max-width: 768px)

{
  order:1;
  display: flex;
    justify-content: center;
    align-items: center;
  .hidden2 {
    width: 24px;
    height: 0px;
    border: 1px solid #000000;
    display: block;
    margin-bottom: 7px;
    cursor: pointer;
    background:black;
    margin-left:15px;
}
}

`;
const Wrapper = styled.div`
  padding: 25px 22px;
  display: flex;
  
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    
    height:42px;
    padding-left:0;
    padding-right: 0px;
    align-items: center;
    padding-bottom:0;
    margin-bottom:0.8rem;
    justify-content: space-around;
    display: flex;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 19px;
  }
`;

const Left = styled.div`

  order:1;
  @media (max-width: 768px) {
    order:1;
    display:flex;
display: none;

    width:30vw;
    justify-content:end;
   
    align-items: center;
    span {
      display: none !important;
    }
 

    .linkText a{
      margin-left:0;
    }
    img {
   
      height: auto;
    }
  }
  span {
    font-size: 18px;
    padding-left: 0.5em;
  }
`;
const Center = styled.div`
  order:2;

  .image-nav{
    height:66px;
    width:250px;
  }
 
  @media (max-width: 768px) {
    order:1;
  
    .image-nav{
      width:188px;
      height:58px;
    }
    
    img {
      height: 3.625rem;
      margin-top: 0;
      padding-right: 0;
      margin-left:-32px;
    }
  }
`;
const Right = styled.div`
order:3;
  .hidden {
    display: none;
  }
 
  @media (max-width: 768px) {
    display: none;

    order:1;
    img {
      display: none;
    }
    
   
     .hidden {
      width: 24px;
      height: 0px;
      border: 1px solid #000000;
      display: block;
      margin-bottom: 7px;
      cursor: pointer;
      background:black;
  }
  }
`;
const Menu = styled.div`
  width: 100%;
  margin-left: 280px;
  margin-bottom: 50px;


  ul li:not(:first-child) {
    font-weight: 400;
    font-size: 18px;
    margin: 13.75px;
    font-family: "Roboto";
    font-style: normal;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Menu2 = styled.div`
  width: 100%;
  margin-left: 280px;
  margin-bottom: 50px;


  ul li {
    font-weight: 400;
    font-size: 18px;
    margin: 13.75px;
    font-family: "Roboto";
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
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      margin-left: 40px;
      margin-top: 30px;
      padding: 0;
    }
    li {
      border: none;
      margin-left: 0 !important;
      margin-bottom: 15px !important;
      border-right-style: hidden;
      padding: 0;
      border-right-style: hidden !important;
    }
    a {
      margin: 0;
    }
  
  
  }
`;

const Navbar = () => {

  function removeClass(){
    links.forEach((link) => {

      link.classList.remove('active');

    });
  }
  const [isOpen, setIsOpen] = React.useState(false);
  const links=document.querySelectorAll('.linkText');
  links.forEach((link)=>{

    link.addEventListener('click',()=>{

      removeClass();
    link.classList.add('active');
    })
    

  });
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Wrapper>
      <Center>
        <NavLink className="linkText" to="/"><img className="image-nav" src="./Images/sohni logo-02.png" alt="" /></NavLink>
        </Center>
        <Left>
        <a href="tel:+91-9999963537"><img className="phone-m" src="./Images/phone.png" alt="" /></a>
        <a href="whatsapp://send?phone=+91-9999963537"><img className="mb-whatsapp" src="./Images/whatsapp_grey.png"></img></a>
          <span>+91-9999963537</span>
        </Left>
    
        <Right>
          
          <div className="conn" onClick={toggleDrawer}>
            <img className="image-nav" src="./Images/fb.png" alt="" />
            <img className="image-nav" src="./Images/Insta.png" alt="" />
            <img className="image-nav" src="./Images/Link.png" alt="" />
            <img className="image-nav" src="./Images/Mail.png" alt="" />
  
            <a href="#" class="hidden"></a>
            <a href="#" class="hidden"></a>
            <a href="#" class="hidden"></a>
          </div>
        </Right>
        <Extreme>

        <a href="tel:+91-9999963537"><img className="phone-m" src="./Images/phone.png" alt="" /></a>
        <a href="whatsapp://send?phone=+91-9999963537"><img className="mb-whatsapp" src="./Images/whatsapp_grey.png"></img></a>
        

        <div className="conn" onClick={toggleDrawer}>
            <a href="#" class="hidden2"></a>
            <a href="#" class="hidden2"></a>
            <a href="#" class="hidden2"></a>
          </div>

        </Extreme>
      </Wrapper>

     
      <Menu className="Menu">
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
      </Menu>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="blablabla"
      >
        <Menu2 className="Menu">
          <ul>
            <li>
              <NavLink className="linkText" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="linkText " to="/about">
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
        </Menu2>
      </Drawer>
    </Container>
  );
};

export default Navbar;

// Day 1 - Delhi to Baniyakund, Chopta (430 km/11 hrs)

// We'll begin our journey at 6 a.m from Delhi.
// Considering the meal breaks, it'll take around 11 hours to reach Chopta covering a distance of about 430 km.
// We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.
// En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath.
// We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.
// By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay.

// Day 2 - Chopta to Tungnath to Chopta (5 km/5-6 hrs - one way)

// The trek to Tungnath from Chopta is about 5 km and will take around 5-6 hours to reach the temple. We'll begin trekking Chopta by early morning 7 a.m.
// Upon reaching the temple, you can offer your prayers to the Lord.
// Then we'll continue ascending towards the peak of Chandrashila. The complete one-way trek will end in a max of 6 hours, so we'll have a good amount of time to explore the summit of Chandrashila.
// After that, we'll come back to Chopta by descending through the same route.
// In Chopta, we'll have another night's stay at the same facility we stayed the first night.

// Day 3 - Chopta to Haridwar (230 km/8 hrs)

// On our third day, we'll begin our return journey to Delhi by 7 am in the morning after having our breakfast.
// Following 11 hours of drive and meal breaks, we'll reach Delhi by 6 pm in the evening, where our tour will officially end.

// Additional Information


// Note:
// Google maps provide a wrong location to Chopta that is extremely close to Rudraprayag and about 57 km away from Sari. The Chopta mentioned in our itinerary lies on the route to Tungnath.

// All timings are subject to changes as per the ongoing Covid restrictions.

// Meal details
// Breakfast - tea/coffee, paratha, toast, sandwich (depending on availability).
// Lunch - roti with vegetable, paratha, dal & rice, achar, salad, sweet.
// Dinner - rice & gravy, roti/paratha, achar, salad, sweet.
// Snacks - tea/coffee, biscuits, sandwiches.
