
import styled from '@emotion/styled'
import React from 'react'
import './Accolades.css'

const Container=styled.div`


    @media (max-width: 768px){
        width: 400px;
       margin-top:-50px;
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