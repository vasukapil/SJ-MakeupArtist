import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Bridal from './Bridal'
import './Media.css'


export const Media = () => {
    const [active,setActive]=useState("first");
  return (
    <div className="Media-Container">
        <Navbar/>
        <div className="Media-Box">

            <h2>Gallery</h2>

            <div className="button">
               
                <a onClick={()=>setActive("first")}>BRIDAL MAKEUP</a>
                <a onClick={()=>setActive("second")}>PARTY MAKEUP</a>
                <a onClick={()=>setActive("third")}>BEFORE/ AFTER</a>
                <a  onClick={()=>setActive("four")}className="adjust">EDITORIAL</a>
            </div>

            <div className="Media-Gallery">

            {active==="first" && <Bridal/>}
            </div>


        </div>

        <div className="span-contain">

        <span className="viewmore">View More</span>

        </div>

        <Footer/>

        
        </div>
  )
}
