
import React,{useState} from "react";
import Footer from "../Footer/Footer";
import OurServices from "../Mobile/OurServices/OurServices";
import Navbar from "../Navbar/Navbar";
import Hair from "./Hair";
import Bridal from "./Bridal";
import Party from "./Party";
import Offer from "./Offer";

import "./Service.css";


const Services = () => {
  const [active,setActive]=useState("first");
  function HandleHover(){
   return document.querySelector('.first').style.backgroundColor='red';
  
  }
  
  return (
    <>
    <Navbar/>
    <div className="wrapper">
      <div className="Service-Container">
        <h2 className="h2">Services</h2>

        <p className="SCP1">
          Sohni Juneja is a well Known Makeup Artist in Delhi for doing
          professional bridal makeup, party makeup and hairstyling. Her bridal
          services are tailored to meet the needs and requirements of the
          clients. Sohni J provides hairstyling, engagement makeup, bridal
          makeup as well as party makeup services. In addition to these, she
          also provides bridal makeup appointment, pre- wedding makeup tips,
          product recommendation to get the best of your look on your special
          day. Apart from the services, she also gives you special offers in
          hairstyling as well as bridal makeup.
        </p>
        <p>
          Professional makeup artist, Sohni Juneja not only provides you all the
          services at her makeup studio but also at your respective venue. To
          give you smooth and hassle free makeover experience, she also travels
          within the city, outstations and at your doorstep as well.
        </p>
      </div>

      <div className="button">
        <a onLoad={HandleHover} onClick={()=>setActive("first")}>HAIR STYLING</a>
        <a onClick={()=>setActive("second")}>BRIDAL MAKEUP</a>
        <a onClick={()=>setActive("third")}>PARTY MAKEUP</a>
        <a onClick={()=>setActive("four")}>OFFERS</a>
      </div>

      <div className="Box-Container">
      
      {active==="first" && <Hair/>}
        {active==="second" && <Bridal/>}
        {active==="third" && <Party/>}
        {active==="four" && <Offer/>}
        </div>
      
      <Footer/>
    </div>

    <div className="Service_mb">
    <OurServices/>
    <Footer/>
    </div>
    </>
  );
};

export default Services;

// gdfgffgfgfdf
