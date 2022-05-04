import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Bridal from './Bridal'
import Party from './Party'
import Editorial from './Editorial'
import './Media.css'
import Before from './Before'


export const Media = () => {
    const [active,setActive]=useState("first");
    
    const Handle = ()=>{

        document.querySelector('.Media-Gallery').style.overflow="initial";
        document.querySelector('.Media-Gallery').style.height="auto";

    }
  return (
    <div className="Media-Container">
        <Navbar/>
        <div className="Media-Box">

            <h2>Gallery</h2>

            <div className="button">
               
                <a className="button-change" onClick={()=>setActive("first")}>BRIDAL MAKEUP</a>
                <a className="button-change" onClick={()=>setActive("second")}>PARTY MAKEUP</a>
                <a className="button-change" onClick={()=>setActive("third")}>BEFORE/ AFTER</a>
                <a className="button-change" onClick={()=>setActive("four")}className="adjust">EDITORIAL</a>
            </div>

            <div className="Media-Gallery">

            {active==="first" && <Bridal/>}
            {active==="second" && <Party/>}
            {active==="third" && <Before/>}
            {active==="four" && <Editorial/>}
            </div>


        </div>

        <div className="span-contain">

        <span onClick={Handle} className="viewmore">View More</span>

        </div>

        <Footer/>

        
        </div>
  )
}
