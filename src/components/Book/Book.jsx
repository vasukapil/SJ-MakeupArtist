

import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Book.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux';



const Book = ({toggleDrawer}) => {

  const [expanded, setExpanded] = React.useState(true);
  const products = useSelector((state)=>state);
  console.log(products);
const [val,setVal]=useState()

  const data = [

    {
        id:"1",
        title:"Bridal Look",
        image:"./Images/Rectangle 98.png",
        price: 
            {
               SJ: [17000,20000],
               Senior_SJ : [26000,29000] ,
               Junior_SJ : [23000,26000]

            }
        
    },
    {
      id:"2",
      title:"Party Look",
      image:"./Images/Party.png",
      price: 
          {
             SJ: [17000,20000],
             Senior_SJ : [26000,29000] ,
             Junior_SJ : [23000,26000]

          }
      
  },
  {
    id:"3",
    title:"Editorial Look",
    image:"./Images/Rectangle 98.png",
    price: 
        {
           SJ: [17000,20000],
           Senior_SJ : [26000,29000] ,
           Junior_SJ : [23000,26000]

        }
    
},
{
  id:"4",
  title:"Pre-Wedding",
  image:"./Images/Rectangle 98.png",
  price: 
      {
         SJ: [17000,20000],
         Senior_SJ : [26000,29000] ,
         Junior_SJ : [23000,26000]

      }
  
}
  ]

  const [value,setValue]=useState('');
  const [prop,setProp]=useState('');



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function first(){

      return (
          <div>
              <Modal data={data[0]}/>
          </div>
      )
  }

  function second(){
     

    return (
        <div>
            <Modal data={data[1]}/>
            
        </div>
    )

  }
  function third(){

    return (
        <div>
            <Modal data={data[2]}/>
        </div>
    )

  }
  function fourth(){

    return (
        <div>
            <Modal data={data[3]}/>
        </div>
    )

  }
  return (
  
  
      <table>
              <tr>
                  <td>Bridal look</td>
                 
                  <td><a className="White" onClick={ ()=>toggleDrawer(1)}>Book Now</a>
                     <img className="mobile-white1" onClick={()=>toggleDrawer(1)} src="./Images/Group 263.png"></img>
                  </td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Party </td>
                  
                  <td><a className="White" onClick={() => toggleDrawer(2)}>Book Now</a>
                  <img className="mobile-white1" onClick={()=>toggleDrawer(2)} src="./Images/Group 263.png"></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Fashion</td>
                  
                  <td><a className="White mobile-white" onClick={() => toggleDrawer(3)}>Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png" onClick={() => toggleDrawer(3)}></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              <tr>
                  <td>Day Look</td>
                 
                  <td><a className="White" onClick={() => toggleDrawer(4)}>Book Now</a>
                  <img className="mobile-white1" src="./Images/Group 263.png" onClick={() => toggleDrawer(4)}></img></td>
                  <td><a className="White">Call Now</a>
                  <a href="tel:+91-9999963537"><img className="mobile-white2" src="./Images/Group 264.png"></img></a></td>
              </tr>

              


              
          </table>
          
    
    
  )
}

export default Book