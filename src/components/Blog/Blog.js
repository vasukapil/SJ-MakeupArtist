import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import './Blog.css'



const Container=styled.div`

height:100vh;
width:100vw;

@media (max-width: 768px){
    width:100vw;
    height:100vh;
}

`

const Wrapper=styled.div`

display:flex;
justify-content:space-around;

@media (max-width: 768px){
    width:100vw;
    height:100vh;
    margin:auto;




`
const Heading=styled.h1`

  text-align : center;
  margin-top:20px;
  font-size: 40px;
`
const First=styled.div`
   flex:1;

   @media (max-width: 768px){
    width:100vw;
    justify-content:center;
    align-items:center;
    margin-left:50px;

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
   .p1{

    @media (max-width: 768px){

        font-size:15px;
        width:390px;
        text-align:center;


    }

   }
   .p2,.p3{
    @media (max-width: 768px){
       display:none;
    }
    }

`
const Second=styled.div`

img{
margin-left:28px;
margin-top:40px;
}
@media (max-width: 768px){
    display:none;
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
`
const Third=styled.div`

   flex:1;

   @media (max-width: 768px){
    display:none;
 }

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

  
    @media (max-width: 768px){
       display:none;
    }
    
     

`
const Blog = () => {
  return (
    <Container>
        <Heading>Blog</Heading>
        <Wrapper>

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
        </Wrapper>
        <View>
            View More
        </View>
        
    </Container>
  )
}

export default Blog