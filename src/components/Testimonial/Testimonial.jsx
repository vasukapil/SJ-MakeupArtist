import React from 'react'
import styled from 'styled-components'
import './Testimonial.css'

const Container=styled.div`
 
height:100vh;
width:100vw;

@media (max-width: 768px){
    // height:100vh;
    width:100vw;
    // margin-top:250px;
    height:auto;
    padding:0 10px;
}

`

const Heading=styled.h1`

text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 40px;
padding-top:20px;
@media (max-width: 768px){
    font-size:25px;
    padding:0;
}


`
const Wrapper=styled.div`

height:80%;
width:100%;
display:flex;
align-items:center;

.l,.r{
    height:20px;
    width:10px;
    position:absolute;
}
.r{
    right:26px;

}
.l{
    left:20px;
}
@media (max-width: 768px) {
    height:auto;
    // margin-top:60px;
}
`
const First=styled.div`
flex:1;
@media (max-width: 768px){

    margin:auto;
}

img{
    width:469px;
    height:661px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left:106px;
}
    @media (max-width: 768px){
        width:50%;
        height:auto;
        margin-top: 0;
        margin-bottom:0px;
        img{
            margin: auto;
            width:80%;
            height:auto;

        }
    }


    


`
const Paragraph=styled.div`
width:589px;
font-size:21px;
margin-top: 50px;
line-height:21px;
text-align:center;
padding-right:20px;
font-weight:400;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
`
const Second=styled.div`
flex:1;

@media (max-width: 768px){
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
    margin:auto;
    padding-right:10px;
}

.inner{
    font-size:48px;
    margin-right:120px;

}
.p1{
    @media (max-width: 768px){
       
        width:197px;
        font-size:14px;
    }
}

.p2{
    @media (max-width: 768px){
       
       display:none;
    }
}
@media (max-width: 768px) {
    margin-top: 0;
    margin-bottom:0px;
    .inner{
        font-size: 20px;
        margin: 0;
        padding: 0;
    }
    .p1, p2{
        font-size:11px;
        margin-top:10px;
        padding-right:0px;
    }
}
`

const Testimonial = ({name}) => {
  return (

    <>
    <Container>
        {/* <Heading>Testimonials</Heading> */}
        <Wrapper>

            <img className="l" src="./Images/Left.png"></img>
            <img className="r" src="./Images/Right.png"></img>

            <First><img src="./Images/Ellipse 5 (1).png"></img></First>
            <Second><Heading className="inner">Vatsala Wilson</Heading>
            
            <Paragraph className="p1">I am glad that I had you as my makeup artist on our big day. Thank you so much for all your help, you are one seriously talented woman! I looked so beautiful and not to mention that makeup looked stubbing on me. 
            </Paragraph>

            <Paragraph className="p2">You made me feel so comfortable (not to forget the soft brush touch, asmr feeling), I couldn't have picked a better makeup artist.</Paragraph>
            
            </Second>
        </Wrapper>
    </Container>

   

    </>

  )
}

export default Testimonial