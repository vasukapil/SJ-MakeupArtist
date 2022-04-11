import styled from '@emotion/styled'
import React from 'react'


const Container = styled.div`

height:360px;
background-color:rgba(241, 241, 241, 1);

h1{
    font-size:24px;
    text-align:center;
    margin-top:80px;
    padding:10px;

}

.footer{

    margin-left:620px;
    margin-top:29px;
}



`
const Contacts=styled.div`

height:100px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
justify-content:center;
allign-items:center;

span{
    margin-right:66px;
    margin-top:49px;
    font-size:20px;
    margin-left:15px;
}



`

const Wrapper=styled.div`

    ul{
        display:flex;
        justify-content:space-between;
        width:900px;
        margin:0px auto;
        margin-bottom:52px;
        list-style:none;
        padding:10px 5px;
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;

    }

`

const Right=styled.div`

margin-left:620px;
margin-right:-100px;


`
const Content=styled.div`

.Container2{
    display:flex;
    justify-content:center;
}


`



const Footer = () => {
  return (
    <Container>
        <h1>Useful Links</h1>
        <Wrapper>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Media</li>
            <li>Blog</li>
            <li>Contact Us</li>
        </ul>
        </Wrapper>
        <Content>
            <div className="social-wrapper">
        <div className="Container2">
        <Contacts>
            <img src="./Images/Telephone.png"></img>
            <span>+91-9999963537</span>
        </Contacts>
        <Contacts>
        <img src="./Images/Group 188.png"></img>
            <span>R - 255, 2nd Floor, G K- 1, Delhi - 110048</span>
        </Contacts>
        <Contacts>
        <img src="./Images/Group 188.png"></img>
            <span>123, lane, opp. Sai Temple, Emerald Hills, Dehradun- 248001</span>
        </Contacts>
        </div>
      
        <Right>
           <img className="image-nav" src="./Images/fb.png" alt="" />
           <img className="image-nav" src="./Images/Insta.png" alt="" />
           <img className="image-nav" src="./Images/Link.png" alt="" />
           <img className="image-nav" src="./Images/Mail.png" alt="" />
           
         </Right>
         <div className="footer">
             <span>copyright@sohnijuneja.com</span>
         </div>
         </div>
         </Content>
    </Container>
  )
}

export default Footer