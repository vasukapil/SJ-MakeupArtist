import React,{useState} from "react";

import './OurServices.css'

import Hair from "./Hair";
import Bridal from "./Bridal";
import Party from "./Party";
import Offers from "./Offers";

const OurServices = () => {
  const [active,setActive]=useState("first");
  

  return (
    <div className="Service-Container-mb">
      <h1 className="services-h1">Our Services</h1>

      <div className="text-wrap-mb">
        <p>
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

        <div className="text-wrap-mb2">
          <p>
            {" "}
            Professional makeup artist, Sohni Juneja not only provides you all
            the services at her makeup studio but also at your respective venue.
            To give you smooth and hassle free makeover experience, she also
            travels within the city, outstations and at your doorstep as well.
          </p>
        </div>
      </div>

      <div className="services-btn-mb">
        <span  onClick={()=>setActive("first")} className="s1 ">HAIR STYLING</span>
        <span  onClick={()=>setActive("second")} className="s2">BRIDAL MAKEUP</span>
        <span onClick={()=>setActive("third")} className="s3">PARTY MAKEUP</span>
        <span onClick={()=>setActive("four")} className="s4">OFFERS</span>
      </div>

      <div className="hair-box">
      {active==="first" && <Hair/>}
        {active==="second" && <Bridal/>}
        {active==="third" && <Party/>}
        {active==="four" && <Offers/>}
                <div className="btn-view">
          <p>View Gallery</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
