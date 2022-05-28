

import React, { useState } from 'react';

import './Book.css'






const Book = ({toggleDrawer}) => {

  const [expanded, setExpanded] = React.useState(true);


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