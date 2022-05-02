import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Publication.css'

const Publication = () => {


    function HandleMe(){
        document.querySelector('.hid').style.display="block";
    }

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
            <div className="hid">

{
[...new Array(30)].map((_,i)=>
<img className="abcd" src={`./Images/Media Publications/x${i + 2}.jpg`} loading="lazy" />
)
}
</div>
            </div>

            <div className="ap-contain">
            <article className="ap">
                <p onClick={HandleMe}>View More</p>
                </article>
                </div>

         
        
        
            <Footer/>

        </div>
  )
}

export default Publication