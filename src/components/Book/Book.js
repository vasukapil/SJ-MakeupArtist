

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Book.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Book = () => {
  return (
    <div className="contain">
    <Accordion
    sx={{
       
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
        boxShadow:"none",

      }}
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
          
        <Typography sx={{ mx: "auto"  }} className="type" align="center" variant="h5">BOOK SERVICES</Typography>
      </AccordionSummary >
      <AccordionDetails className="space">
      <table>
              <tr>
                  <td>Sohni Juneja</td>
                  <td>₹ 40,000</td>
                  <td><a>Book Now</a></td>
                  <td><a>Call Now</a></td>
              </tr>

              <tr>
                  <td>Senior Sohni Juneja</td>
                  <td>₹ 40,000</td>
                  <td><a className="White">Book Now</a></td>
                  <td><a className="White">Call Now</a></td>
              </tr>

              <tr>
                  <td>Junior Sohni Juneja</td>
                  <td>₹ 40,000</td>
                  <td><a className="White">Book Now</a></td>
                  <td><a className="White">Call Now</a></td>
              </tr>

              
          </table>
      </AccordionDetails>
    </Accordion>
    
    
  </div>
  )
}

export default Book