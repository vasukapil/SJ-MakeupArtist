

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Book.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Book = ({toggleDrawer}) => {

  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
  
  
      <table>
              <tr>
                  <td>Bridal look</td>
                 
                  <td><a className="White" onClick={toggleDrawer}>Book Now</a>
                     <img className="mobile-white1" onClick={toggleDrawer} src="./Images/Group 263.png"></img>
                  </td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Party </td>
                  
                  <td><a className="White" onClick={toggleDrawer}>Book Now</a>
                  <img className="mobile-white1" onClick={toggleDrawer} src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Fashion</td>
                  
                  <td><a className="White mobile-white" onClick={toggleDrawer}>Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png" onClick={toggleDrawer}></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Day Look</td>
                 
                  <td><a className="White" onClick={toggleDrawer}>Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png" onClick={toggleDrawer}></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              


              
          </table>
          
    
    
  )
}

export default Book