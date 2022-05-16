import { Accordion } from "@mui/material";
import React, { Component } from "react";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from "react-slick";
import './Slider.css'



export default function Responsive (){

  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

 
 
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (


      <Accordion expanded={expanded}
      onChange={handleChange('panel1')}
    sx={{
       
        // display:"none",
        border:"none ",
        borderTop:"none",
        boxShadow:"none",
        width:"100vw",
        textAlign:"center",


      }}
    >
      <AccordionSummary className="checking" sx={{
    
    // display:"none",
    border:"none ",
        borderTop:"none",
        borderBottom:"none",
        boxShadow:"none",
        outline:"none",
        width:"100vw",
}}
expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
          
        <Typography  style={{ fontWeight: 500 , color:"rgba(70, 67, 67, 1)"}} sx={{ mx: "auto"  }} className="type" align="center" variant="h5">SOHNI JUNEJA SCHOOL OF MAKEUP</Typography>
      </AccordionSummary >
      <AccordionDetails className="space"></AccordionDetails>
        
        <Slider className="sliderWrap sliderWrapAr sllAr sllAr2" {...settings}>
          <div className="sliderGallery">
            <h3>
                <img src="./Images/Rectangle 57.png" ></img>
            </h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 58.png"></img></h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 59.png"></img></h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 60.png"></img></h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 60.png"></img></h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 59.png"></img></h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 58.png"></img></h3>
          </div>
          <div>
            <h3><img src="./Images/Rectangle 57.png"></img></h3>
          </div>
        </Slider>
      </Accordion>
    );
  }