import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Media.css'


export const Media = () => {
  return (
    <div className="Media-Container">
        <Navbar/>
        <div className="Media-Box">

            <h2>Album</h2>

            <div className="button">
               <a>HAIR STYLING</a>
                <a>BRIDAL MAKEUP</a>
                <a>PARTY MAKEUP</a>
                <a>OFFERS</a>
            </div>

            <div className="Media-Gallery">

                <div className="First-row">
                    <img src="./Images/Rectangle 87.png"></img>
                    <img src="./Images/Rectangle 92.png"></img>
                    <img src="./Images/Rectangle 88.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 87.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 92.png"></img>
                </div>

                <div className="Second-row">
                    <img src="./Images/Rectangle 91.png"></img>
                    <img src="./Images/Rectangle 89.png"></img>
                    <img src="./Images/Rectangle 90.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 91.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 89.png"></img>
                </div>

                <div className="Third-row">
                    <img src="./Images/Rectangle 87.png"></img>
                    <img src="./Images/Rectangle 92.png"></img>
                    <img src="./Images/Rectangle 88.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 87.png"></img>
                    <img className="mobile-gallery" src="./Images/Rectangle 92.png"></img>
                </div>

            </div>


        </div>

        <article>View More</article>

        
        </div>
  )
}
