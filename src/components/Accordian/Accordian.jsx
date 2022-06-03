import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordian.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Accordian = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
    <div className="contain">
        <h1>FAQ'S</h1>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
    sx={{
       
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
        boxShadow:"none",
        maxWidth:"88%",

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
          
        <Typography style={{

          fontFamily: 'Poppins',
          fontStyle:'normal',
          fontWeight:'400',
          fontSize:'20px',
          color:'#464343'
           
        
        }} variant="h5">Which locations does professional makeup artist Sohni Juneja serve?</Typography>
      </AccordionSummary >
      <AccordionDetails>
        <Typography>
        Sohni Juneja is ranked among the Best Bridal makeup artists in Delhi, she also has a makeup studio in Dehradun and extends her makeup services worldwide.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
      sx={{
        
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
boxShadow:"none",
maxWidth:"88%",

      }}
    >
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343'
 

}} variant="h5">Why is Sohni Juneja considered one of the best makeup artists all over India?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Sohni Juneja is one of the best freelance makeup artists in India. She offers you all the services not only at her makeup studio but also at your respective venue. To give you a smooth and trouble-free makeover experience, she travels within the city, outstations, and at your doorstep as well.

        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
        
        // display:"none",
        border:"none",
        borderBottom:"1px solid gray",
        boxShadow:"none",
        maxWidth:"88%",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343',
textAlign:'inherit'
 

}} variant="h5">Why choose Sohni Juneja for Party Makeup?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        If you want amazing party looks, then choose the party makeup artist in Delhi-Sohni Juneja. She offers makeup with the best products that suit your skin perfectly and covers all the imperfections of the skin.

        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
        
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
        boxShadow:"none",
        maxWidth:"88%",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343',
textAlign:'inherit'
 

}} variant="h5">Does a Professional makeup artist in Delhi Sohni Juneja offer all kinds of bridal makeup services?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        The professional makeup artist in Delhi offers bridal makeup, party makeup, and hairstyling. With this Sohni Juneja offers engagement makeup, party makeup services, wedding makeup tips, and product recommendations

        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{
       
        // display:"none",
        border:"none ",
        boxShadow:"none",
        borderBottom:"1px solid gray",
        maxWidth:"88%",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343',
textAlign:'inherit'
 

}} align="right" variant="h5">What services are included in Bridal makeup packages offered by Sohni Juneja?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Sohni Juneja provides exclusive bridal makeup services to her clients. She is an expert in grooming her brides. She offers makeup services to the brides by using high-quality makeup products so that brides can get a long-lasting look.
        </Typography>
      </AccordionDetails>
    </Accordion>

    
    
  </div>

  <div className="map-contain">
  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13767.769856120969!2d78.08343627934566!3d30.380991644575506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13e8933f0d1cb787!2sMakeup%20by%20Sohni%20Juneja!5e0!3m2!1sen!2sin!4v1654251573890!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="mb-map"> 
  <iframe className="map-mb" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13767.769856120969!2d78.08343627934566!3d30.380991644575506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13e8933f0d1cb787!2sMakeup%20by%20Sohni%20Juneja!5e0!3m2!1sen!2sin!4v1654251573890!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  </>


  )
}

export default Accordian