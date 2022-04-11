import React from 'react'
import styled from 'styled-components'

const SocialMedia=styled.div`

height:100%;
width:100%;
margin-top:170px;


@media (max-width: 768px){
    width:100vw;
    height:100vh;
}

`
const Logo=styled.div`

display:flex;
justify-content:center;
align-items:center;

div img{
    display:block;

    
}

@media (max-width: 768px){
    height: 60px;
    margin-top:0;
    margin-bottom:50px;
}


`
const Gallery=styled.div`

height: 45.313em;

img{
    height:430px:
    width: 430px;
    padding-right:10px;
    
}
img:first-child{
    margin-left:10px;

    @media (max-width: 768px){
       display:none;
    }
}



`

const Social = () => {
  return (
    <SocialMedia>
        <Logo>
                <img src="./Images/image 18.png"></img>
                <div>
                    <img src="./Images/FOLLOW US ON.png"></img>
                    <img src="./Images/image 19.png"></img>
                </div>
        </Logo>

        <Gallery>
            <img src="./Images/Group 46.png"></img>
            <img src="./Images/Group 47.png"></img>
        </Gallery>

    </SocialMedia>
  )
}

export default Social