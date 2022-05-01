

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Book.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Book = () => {

  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
  return (
  
    <Accordion expanded={expanded}
    onChange={handleChange('panel1')}
    sx={{
       
        // display:"none",
        border:"none ",
        borderTop:"none",
        borderBottom:"none",
        boxShadow:"none",
        outline:"none",
        width:"100vw",
      

      }}
      // className="mainDiiv"
    >
      <AccordionSummary sx={{
    
    // display:"none",
    color:"gray",
    
boxShadow:"none",
}}
expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
          
        <Typography  style={{ fontWeight: 500 , color:"rgba(70, 67, 67, 1)"}} sx={{  }} className="type" variant="h5">BOOK SERVICES</Typography>
      </AccordionSummary >
      <AccordionDetails className="space2" >
      <table>
              <tr>
                  <td>Party Makeup look</td>
                 
                  <td><a className="White">Book Now</a>
                     <img className="mobile-white1" src="./Images/Group 263.png"></img>
                  </td>
                  <td><a className="White">Call Now</a>
                  <img className="mobile-white2" src="./Images/Group 264.png"></img></td>
              </tr>

              <tr>
                  <td>Bridal Makeup look </td>
                  
                  <td><a className="White">Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <img className="mobile-white2" src="./Images/Group 264.png"></img></td>
              </tr>

              <tr>
                  <td>Pre-Wedding Look.</td>
                  
                  <td><a className="White mobile-white">Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <img className="mobile-white2" src="./Images/Group 264.png"></img></td>
              </tr>

              <tr>
                  <td>Pre-Wedding Look.</td>
                 
                  <td><a className="White">Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <img className="mobile-white2" src="./Images/Group 264.png"></img></td>
              </tr>


              
          </table>
      </AccordionDetails>
    </Accordion>
    
  )
}

export default Book