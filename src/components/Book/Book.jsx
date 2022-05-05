

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Book.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Book = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
  return (
  
    <Accordion className="changed" expanded={expanded}
    onChange={handleChange('panel1')}
    sx={{
       
        // display:"none",
        // border:"none ",
        // borderTop:"none",
     
        // boxShadow:"none",
        // outline:"none",
        width:"100vw",
        marginTop:'1px'
      

      }}
      // className="mainDiiv"
    >
      <AccordionSummary sx={{
    
    // display:"none",
  
}}
expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
          
        <Typography  style={{color:'rgb(70,67,67)'}} sx={{  }} className="type" variant="h5">BOOK SERVICES</Typography>
      </AccordionSummary >
      <AccordionDetails className="space2" >
      <table>
              <tr>
                  <td>Bridal look</td>
                 
                  <td><a className="White">Book Now</a>
                     <img className="mobile-white1" src="./Images/Group 263.png"></img>
                  </td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Party </td>
                  
                  <td><a className="White">Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Fashion</td>
                  
                  <td><a className="White mobile-white">Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Day Look</td>
                 
                  <td><a className="White">Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              


              
          </table>
          
      </AccordionDetails>
    </Accordion>
    
  )
}

export default Book