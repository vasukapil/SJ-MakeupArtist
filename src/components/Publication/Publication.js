import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Publication.css'

const Publication = () => {
  return (
    <div className="Publication-Container">
        <Navbar/>
        <div className="Publication-Wrapper">
            <h2>Media Publications</h2>

            <div className="flex-Container">
                <div className="First-flex">
                    <img src="./Images/125.png"></img>
                </div>
                <div className="Second-Container">

                <div className="Second-One">

                <img src="./Images/126.png"></img>
                <img src="./Images/127.png"></img>

                 </div>

                 <div className="Second-Two">

                 <img src="./Images/129.png"></img>
                 <img src="./Images/128.png"></img>

                </div>

                </div>


            </div>
            <article>View More</article>
        </div>
        
        </div>
  )
}

export default Publication