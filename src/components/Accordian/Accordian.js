import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordian.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Accordian = () => {
  return (
    <div className="contain">
        <h1>FAQ'S</h1>
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
          
        <Typography align="center" variant="h5">How do I book an appointment?</Typography>
      </AccordionSummary >
      <AccordionDetails>
        <Typography>
        
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      sx={{
        color: "red",
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
boxShadow:"none",

      }}
    >
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography  align="center" variant="h5">How many looks are available?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
        color: "red",
        // display:"none",
        border:"none",
        borderBottom:"1px solid gray",
        boxShadow:"none",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography  align="center" variant="h5">How to reschedule/ cancel?</Typography>
      </AccordionSummary>
    </Accordion>
    <Accordion sx={{
        color: "red",
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
        boxShadow:"none",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography  align="center" variant="h5">How much is the minimum advance?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
        color: "red",
        // display:"none",
        border:"none ",
        boxShadow:"none",
        borderBottom:"1px solid gray",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography  align="right" variant="h5">Payment Methods</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    
  </div>
  )
}

export default Accordian