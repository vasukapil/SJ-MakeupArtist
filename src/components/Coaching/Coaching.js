import { Accordion } from "@mui/material";
import React from "react";
import './Coaching.css'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Coaching = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="wrap-d">
   
        <div className="Coaching-Container">
        <div className="first-p">
          Sohni Juneja School of Makeup offers premier makeup, grooming, and
          hairstyling courses. The courses are supervised and conducted by Sohni
          Juneja. Anyone willing to gain an understanding of professional makeup
          and grooming can enroll in the Sohni Juneja School of Makeup.
        </div>

        <div className="second-p">
          <h2>Features of Sohni Juneja School of Makeup</h2>

          <ul>
            <li>Practical hands-on training.</li>
            <li>
              Latest techniques and advanced information on the latest equipment
              and updates.
            </li>
            <li>Best Learning Experience in a professional setting.</li>
            <li>Fixed enrollment to ensure individual attention.</li>
            <li>
              Application-based courses to kick start your professional journey.
            </li>
          </ul>

            <div className="Third-p">
          <h3>COURSE DETAILS</h3>

          <p><b>Course Name:</b> Professional Makeup Classes</p>
          <p><b>Conducted By:</b> Sohni Juneja</p>
          <p><b>Batch Details:</b> Starting July 20th Onwards</p>
          <p><b>Duration:</b> 15 Classes</p>

          </div>

            <div className="four-p">
          <h3>Course Content</h3>

          <ul>
            <li> UNDERSTANDING SKIN TONE &amp;TYPE</li>
            <li>THEORY OF MAKE-UP</li>
            <li>COLOR CORRECTION</li>
            <li>BASE SELECTION</li>
            <li>DAY MAKEUP</li>
            <li>CONTOURING &amp; HIGHLIGHTING, LINER TECHNIQUES</li>
            <li>EYEBROW SHAPING</li>
            <li>LIP SHAPING</li>
            <li>5-10-15 MINS MAKE-UP</li>
            <li>TV/ STILL SHOOT MAKE-UP</li>
            <li>DRAMATIC MAKEUP</li>
            <li>WEDDING MAKEUP</li>
            <li>AIR BRUSH MAKEUP</li>
            <li>EVENING MAKEUP(SMOKEY EYES, ETC)</li>
          </ul>

          <a className="coach-check" href="tel:+91-9999963537"><span>DM on 9999963537 to enroll</span></a>
          <a className="coach-check" href="mailto:junejasohni@gmail.com"><span>Email: junejasohni@gmail.com</span></a>
          <span>Website: www.sohnijuneja.com</span>

          </div>

          <div className="btn-p">
            <button>Rs 97,000 + GST</button>

            <p className="covid"><b>*Note:</b> Class timings are subject to changes as per the prevailing COVID-19 norms implemented by the government. 
</p>
          </div>

         
        </div>
      </div>
     
     
     
    </div>
  );
};

export default Coaching;
