import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import {Helmet} from "react-helmet";
import './Social.css'


const SocialMedia=styled.div`

// height:100%;
width:100%;
padding:2rem;
margin-top: 2rem;


@media (max-width: 768px){

    width:100vw;
    padding:1rem;

    // height:100vh;
}
@media(max-width:450px){
    ._wPDyp{
        flex-basis: calc(100%/3 - 10px) !important;
    }
}

`
const Logo=styled.div`

display:flex;
justify-content:center;
align-items:center;

div img{
    display:block;
}

div{
    margin-top:90px;
}
div img:last-child{
    margin-bottom:70px;
}

.insta{
    margin-bottom:75px;
}

@media (max-width: 768px){
    
    height: 60px;
    margin-top:0;
    margin-bottom:50px;
    .insta{
        width: 50px;
        margin-bottom:10px;
    }
.foll{
    height:14px;
}
.ins{
    height: 60px;
}
div{

}
}


`

const Social = () => {

//     const [num,setNum]=React.useState(8);
//     React.useEffect(() => {
//         if(window.innerWidth>700){
//             setNum(18);
//             console.log(window.innerWidth);
//         }else{
//             setNum(9);
//         }
//       },[]);
  return (
   

    <SocialMedia>
         <Helmet>


       

<script src="https://apps.elfsight.com/p/platform.js" defer></script>

</Helmet>

        <Logo>
                <img className="insta" src="./Images/image 18.png"></img>
                <div>
                    <img className="foll" src="./Images/FOLLOW US ON.webp"></img>
                    <img className="ins" src="./Images/image 19.png"></img>
                </div>
        </Logo>
            <div class="elfsight-app-99718820-f781-473d-ae34-e7367558be91"></div>
            {/* <img  src="./Images/Group 46.png"></img>
            <img  src="./Images/Group 47.png"></img>
            <div className="imgone">
            <img src="./Images/Group 46.png"></img>
            </div>
            <div className="imgtwo">
            <img src="./Images/Group 47.png"></img>
            </div> */}
           
           {/* <InstagramFeed token={process.env.REACT_APP_INS_KEY}  counter={num}/>  */}

    </SocialMedia>
  )
}

export default Social