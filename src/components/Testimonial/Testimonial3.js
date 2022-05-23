import React from 'react'
import styled from 'styled-components'
import './Testimonial.css'

const Container=styled.div`
 
width:100vw;

@media (max-width: 768px){
    width:100vw;
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
@media (max-width:358px){
    flex:1;
max-width:90%;
flex-wrap:wrap;
}
`
const First=styled.div`
flex:1;
max-width:100%;

@media (max-width: 768px){

    margin:auto;

    div{
    
    }
}

img{
    width: 300px;
    height: 422.81px;
    margin: auto !important;
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
            height:50%;
            width:150px;
            height:206px;

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
        width:100%;
    }
    .p1, p2{
        font-size:11px;
        margin-top:10px;
        padding-right:0px;
    }
}
`

const Testimonial3 = ({name}) => {
  return (

    <>
    <Container>
        {/* <Heading>Testimonials</Heading> */}
        <Wrapper>

            {/* <img className="l" src="./Images/Left.png"></img>
            <img className="r" src="./Images/Right.png"></img> */}

            <First>
                <div className="first-"><img alt="Best makeup arrist in Delhi ncr" src="./Images/Ellipse 6 (2).png"></img></div></First>
            <Second><Heading className="inner">Vishakha Dodhi</Heading>
            
            <Paragraph className="p1">Hey guys, if you are looking for a perfect makeup artist then you should definitely go for Sohni. She is extremely professional. She understand the need of the client and yes she is a magician. 
            </Paragraph>

            <Paragraph className="p2">You made me feel so comfortable (not to forget the soft brush touch, asmr feeling), I couldn't have picked a better makeup artist.</Paragraph>
            
            </Second>
        </Wrapper>
    </Container>

   

    </>

  )
}

export default Testimonial3