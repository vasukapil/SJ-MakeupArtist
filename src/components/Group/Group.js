import React from 'react'

import styled from "styled-components";

import SliderSync from "../SliderSync/SliderSync";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import './Group.css'
const Main_Boundary=styled.div`

max-width:100%;
height:100%;




`

const Container_main = styled.div`

    width:94%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  margin:auto;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding-bottom:15px;
  
  }
`;

const Leftdetails = styled.div`
  width: 50%;
  max-height: 189px;
  flex:1;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  
  flex-wrap: wrap;
  text-align: left;
  vertical-align: middle;
  padding-left: 2.875em;
  margin-top:230px;
  h1 {
    font-size: 3.6em;
    text-align: left;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    padding-bottom:0 !important;
   
  }
  p {
    max-width: 33.75em;
    font-size: 1.2rem;
    line-height: 24.8px;
    margin-bottom: 1.75em;
  }
  article {
    max-width: 150px;
    border-radius: 1.25em;
    background-color: rgba(116, 113, 113, 1);
    color: #fff;
    font-size: 1.25rem;




    .White-dusra {
      color: #fff;
      text-align: center;
      padding: 5px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Leftdetail = styled.div`
  margin: auto 0;
  flex-wrap: wrap;
  text-align: left;
  vertical-align: middle;
  padding-left: 2.875em;
  margin-top:0;

  @media (max-width: 768px) {
    margin: 30px;
  }
  h1 {
      display:none;
    font-size: 3.75em;
    text-align: left;
  }

    @media (max-width: 768px) {
      font-size: 16px;
      text-align: center;
      margin-top: -230px;
    }
  }
  p {
    max-width: 33.75em;
    font-size: 20px;
    line-height: 24.8px;
    margin-top: 0.75em;
    margin-bottom: 1.75em;

    @media (max-width: 768px) {
      font-size: 8px;
      text-align: center;
      line-height: 9.75px;
      padding-right:10px;
    }
  }
  article {
    width: 150px;
    border-radius: 1.25em;
    background-color: rgba(116, 113, 113, 1);
    color: #fff;
    
    font-size: 24px;

    @media (max-width: 768px) {
     
      height: 19px;
      text-align: center;
    }
  }
  article .White-dusra {
    margin-top: 10px;
    padding: 10px;
    
  }
  .White-dusra {
    color: #fff !important;
    height: 24px;
    margin: 10px;
    cursor:pointer;

  }
  
  
      @media (max-width: 768px) {
        text-align: center;
        margin:0;
        width:45%;
        padding:0;
        
        margin:5%;
        display:flex;
        align-items:center;
        justify-content: center;
        h1{
          margin: 0;
          padding:0;
          font-size:20px;
        }
        article, p{
          display: flex;
    align-items: center;
    justify-content: center;
    font-size:12px;
    opacity:0.8;
    line-height: 13px;
        }
        article{
            width: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom:2px;
        }
        .White-dusra{
          padding:0 ! important;
          font-size:11px;
        }
      }
`;
const Rightdetails = styled.div`

  flex:1;
  img {
    height: 562px;
    width: 500px;
  }
`;
const Rightdetail = styled.div`
  img {
    height: 562px;
    width: 500px;
  }

  @media (max-width: 768px) {
width:50%;

  }
`;
const Bottomdetails = styled.div`
  display: flex;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    margin-top: 18px;
  }

  img:not(:first-child) {
    height: 130px;
    width: 115px;

    @media (max-width: 768px) {
      width: 100px;
      height: 112.42px;
    }
  }
  img:first-child {
    height: 140px;
    width: 125px;
    border: 2px solid black;

    @media (max-width: 768px) {
      width: 90px;
      height: 101.42px;
    }
  }
`;
const LeftArrow = styled.div`
  img {
    height: 40px;
    width: 40px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: -1em;
    background-color: rgba(255, 255, 255, 1);
    background-repeat: no-repeat;
    background-position: center;

    background-image: url("./Images/Left.png");
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightArrow = styled.div`
  img {
    height: 40px;
    width: 40px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top: 50%;
    right: -1em;
    background-image: url("./Images/Right.png");
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Imgdiv = styled.div`
  height: 35.125em;
  width: 31.25em;
  position: relative;
  margin-bottom: 0.75em;
  margin-right: 2.43em;
  margin-top: 4.68em;

  @media (max-width: 768px) {
    .firstimg-m {
      display: inline-block;
    }
    margin:0;
    width:100%;
    height:auto;
    .bride{
      img{
        margin:0;
        width:90%;
      object-fit:cover;
      height:auto;
      }
    }
  }

  .firstimg-m {
    display: none;
  }
`

const Group = () => {

  return (
    <div>

<Container_main >
        <Leftdetails>
          <h1>Sohni Juneja</h1>
          <p>
          Sohni Juneja, a product of National Institute of Fashion Technology (Delhi) where she got her proficiency in her passion for Designing and Styling.
          </p>
          <article>
            <p className="White-dusra">
            <NavLink className="cc" to="/about">
            Read More
            </NavLink></p>
              
          </article>
        </Leftdetails>

        <div className="SliderSyncwrapper">
          <SliderSync  />
        </div>
      </Container_main>

    </div>
  )
}

export default Group