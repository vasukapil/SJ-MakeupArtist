import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
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

                <div className="First-row">
                    <img className="resp" src="./Images/Rectangle 87.png"></img>
                    <img className="resp resp2" src="./Images/Rectangle 92.png"></img>
                    <img className="resp resp1" src="./Images/Rectangle 88.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 87.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 92.png"></img>
                </div>

                <div className="Second-row">
                    <img className="resp" src="./Images/Rectangle 91.png"></img>
                    <img className="resp resp2" src="./Images/Rectangle 89.png"></img>
                    <img className="resp resp1" src="./Images/Rectangle 90.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 91.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 89.png"></img>
                </div>

                <div className="Third-row">
                    <img className="resp" src="./Images/Rectangle 87.png"></img>
                    <img className="resp resp2" src="./Images/Rectangle 92.png"></img>
                    <img className="resp resp1" src="./Images/Rectangle 88.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 87.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 92.png"></img>
                </div>

            </div>


        </div>

        <div className="span-contain">

        <span className="viewmore">View More</span>

        </div>

        <Footer/>

        
        </div>
  )
}
