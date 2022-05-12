
import styled from '@emotion/styled'
import React from 'react'
import './Accolades.css'

const Container=styled.div`

    width:100%;
    height:100%;

    @media (max-width: 768px){
        width: 400px;
       margin-top:40px;
    }

    .Accolades{

        @media (max-width: 768px){

        display:flex;
        justify-content:space-between;
        }
    }
   img{
       width:200px;
       height:200px;
    @media (max-width: 768px){
        width:80px;
        height:80px;
  
    }
   }
   li{

    list-style:none;

    @media (max-width: 768px){
        list-style:none;
    }
   }
   h2{
       margin-top:64px;
    @media (max-width: 768px){

        margin:auto;
        text-align:center;
        font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #464343;
        padding:0;
        margin-bottom:20px;
        width: 100vw;
    margin-left: 0;
    }

   }
   @media (max-width: 768px){
       ul{
          
           width:100vw;
           padding-left:0;
           
           li{
              width:20%; 
              display:flex;
              align-items:center;
              justify-content:center;
           }
           img{
               width:85%;
               height:auto;
               margin:auto;
           }
       }
   }


`

const Accolades = () => {
  return (
    <Container className="Accolades">
        <h2>Accolades</h2>
        <ul>
            <li><img src="./Images/1.png"></img></li>
            <li><img src="./Images/2.png"></img></li>
            <li><img src="./Images/3.png"></img></li>
            <li><img src="./Images/4.png"></img></li>
            
        </ul>
    </Container>
  )
}

export default Accolades