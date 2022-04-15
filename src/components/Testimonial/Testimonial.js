import React from 'react'
import styled from 'styled-components'
import './Testimonial.css'

const Container=styled.div`
 
height:100vh;
width:100vw;

@media (max-width: 768px){
    height:100vh;
    width:100vw;
    margin-top:130px;
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
    font-size:30px;
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

    @media (max-width: 768px){
        width:150px;
        height:206.5px;
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

    margin:auto;
    padding:auto;
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
`

const Testimonial = ({name}) => {
  return (

    <>
    <Container>
        <Heading>Testimonials</Heading>
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