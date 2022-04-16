import React from 'react'
import styled from 'styled-components'

const SocialMedia=styled.div`

height:100%;
width:100%;
margin-top: 2rem;


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
}


`
const Gallery=styled.div`

display:flex;
justfy-content:space-between;
align-items:center;
width:100%;

height: 45.313em;
margin-bottom:6rem;
margin-left:3%;

.imgone{
    flex:1;
    width:50%;
    justfy-content:center;
align-items:center;
text-align:center;

    

    img{
        width:92%;
      
        
    }

}
.imgtwo{
    flex:1;
    width:50%;

    img{
        width:92%;
        

    }
}



`

const Social = () => {
  return (
    <SocialMedia>
        <Logo>
                <img className="insta" src="./Images/image 18.png"></img>
                <div>
                    <img src="./Images/FOLLOW US ON.png"></img>
                    <img src="./Images/image 19.png"></img>
                </div>
        </Logo>

        <Gallery>
            <div className="imgone">
            <img src="./Images/Group 46.png"></img>
            </div>
            <div className="imgtwo">
            <img src="./Images/Group 47.png"></img>
            </div>

        </Gallery>

    </SocialMedia>
  )
}

export default Social