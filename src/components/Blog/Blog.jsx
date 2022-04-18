import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import './Blog.css'
import Slider from "react-slick";
import './Blog.css'


const Container=styled.div`

height:100vh;
width:100vw;

@media (max-width: 768px){
    width:100%;
    margin-top:50px;
height:auto;
}
@media(max-width:600px) {
    .slick-next::after {
        right: 5px;
        content: ">";
        top: 30%;
        color: black;
        font-size: 32px;
        font-weight: bolder;
        font-family: monospace;
        position: absolute;
        width: 25px;
        z-index: 9999999;
        height: 25px;
        }
    .slick-next {
        background: red;
    }
}

`

const Wrapper=styled.div`

display:flex;
justify-content:space-around;

@media (max-width: 768px){
    width:100vw;
    // height:100vh;
    margin:auto;
    padding: 12px;
}



`
const Heading=styled.h1`

  text-align : center;
  margin-top:20px;
  font-size: 40px;
  @media (max-width: 768px){
    font-size:25px;
    padding:0;
    margin-bottom:20px;
   }
`
const First=styled.div`
   flex:1;

   @media (max-width: 768px){
    width:80%;
    justify-content:center;
    align-items:center;
 

   }
   img{
       width:418px;
       height:279px;
       margin-left:28px;
       margin-top:40px;

   }
   p{
    margin-left:30px;
   }
   
   @media (max-width: 768px){
    width: 100%;
    display: inline-block;
    padding: 12px;
        .p1{
        font-size:15px;
        text-align : center;
        }
        img{
            width:95%;
            height:auto;
            margin-left:0;
            margin-top:0px;
            margin-left:2.5%;
     
        }
        .p2,.p3{
            display:none;
        }

    }

   .p2,.p3,.p1{
       margin-left:3%;
    }

`
const Second=styled.div`

img{
margin-left:28px;
margin-top:40px;
}
@media (max-width: 768px){
    display:none;
    width: 100%;
    display: inline-block;
    padding: 12px;
}
.p2,.p3{
@media (max-width: 768px){
   display:none;
}
}
p{
    margin-left:30px;
}
   flex:1;
   @media (max-width: 768px){
    img{
        margin-left:0px;
        margin-top:0px;
       }
 }
`
const Third=styled.div`

   flex:1;

 

 .p2,.p3{
    @media (max-width: 768px){
       display:none;
       
    }
    }
   img{
    margin-left:30px;
    margin-top:40px;
   }
   p{
    margin-left:30px;
   }
   @media (max-width: 768px){
    width: 100%;
    display: inline-block;
    padding: 12px;
    img{
        margin-left:0px;
        margin-top:0px;
       }
 }
`
const View=styled.div`

   margin-top:25px;
  text-align:center;
  border: 1px solid;
  border-radius:20px;
  background-color:rgba(116, 113, 113, 1);
  color:#fff;
  width: 9em;
  margin:auto;
  font-size:20px;
  padding:8px;
  margin-top:48px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;

  
    @media (max-width: 768px){
       display:none;
    }
    

`
const Blog = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Container>
        <Heading>Blog</Heading>
        <Wrapper className="sllAr">
        <Slider className="sliderWrap sliderWrapAr" {...settings}>

            <First>
                <img src="./Images/Rectangle 17.png"></img>
                <p className="p1">ROSEWATER BENEFITS: FROM ANTIOXIDANTS TO ANTI-AGING</p>
                <p className="p2">By Sohni- June 30, 2021</p>
                <p className="p3">Read More</p>
            </First>
            <Second>
                <img src="./Images/Rectangle 18.png"></img>
                <p className="p1">EXCITING 2021 EYE MAKEUP TRENDS</p>
                <p className="p2">By Sohni- June 30, 2021</p>
                <p className="p3">Read More</p>
            </Second>
            <Third>
                <Third><img src="./Images/Rectangle 19.png"/></Third>
                <p className="p1">WHAT ARE THE BENEFITS OF HYALURONIC ACID ON SKIN</p>
                <p className="p2">By Sohni- June 30, 2021</p>
                <p className="p3">Read More</p>
            </Third>
        </Slider>

        </Wrapper>
        <View>
            View More
        </View>
        
    </Container>
  )
}

export default Blog