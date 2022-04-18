
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
    @media (max-width: 768px){
        width:80px;
        height:80px;
        object-fit:content;
    }
   }
   li{

    list-style:none;

    @media (max-width: 768px){
        list-style:none;
    }
   }
   h2{
    @media (max-width: 768px){

        margin:auto;
        text-align:center;
        font-size:20px;
        padding:0;
        margin-bottom:20px;
    }

   }
   @media (max-width: 768px){
       ul{
           padding:10;
           width:100vw;
           
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
            <li><img src="./Images/image 16 (1).png"></img></li>
            <li><img src="./Images/image 16 (2).png"></img></li>
            <li><img src="./Images/image 16 (3).png"></img></li>
            <li><img src="./Images/image 16 (4).png"></img></li>
            
        </ul>
    </Container>
  )
}

export default Accolades