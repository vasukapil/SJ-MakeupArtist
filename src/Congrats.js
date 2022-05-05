import React, { Fragment } from 'react'
import Navbar from './components/Navbar/Navbar'

function Congrats() {
  return (
      <Fragment>
           <Navbar/>
    <div className="Congrats" style={{fontSize:"48px",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       
        <h1>Congratulations</h1> 
    
    <p style={{fontSize:"24px",textAlign:"center"}}> Your Payment was successful.</p>
    </div>
    </Fragment>
  )
}

export default Congrats