import styled from '@emotion/styled'
import React from 'react'

const MobileContainer=styled.div`

.not-flex{
    display:none;
}

@media (max-width: 768px) {

    .not-flex{
        display:block;
        margin-top:-100px;
        margin-left:76px;
    }

}

`

const OuterRight=styled.div`

   

`
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

    @media (max-width: 768px) {
        display:none;
    }
}

@media (max-width: 768px) {

    display:flex;
    flex-direction:row;
    width:100%;
    margin-top:60px;
 
    .mb-first{
        display:flex;
        flex-direction:column;
        width:50%;
        order:2;
    }
    h1{
        margin-top:0px;
        margin-left:0;
        font-size:16px;
        text-align:left;
    }
  
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

@media (max-width: 768px) {
 
    height:52px;
    
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

    @media (max-width: 768px) {

        ul{
            display:flex;
            flex-direction:column;
            order:2;
            font-size:12px;
            width:100%;

 
    }

`

const Right=styled.div`

margin-left:620px;
margin-right:-100px;

@media (max-width: 768px) {

    display:none;
}



`
const Content=styled.div`

.Container2{
    display:flex;
    justify-content:center;
}

.checkh1{
    display:none;
}

@media (max-width: 768px) {
        .Container2{
            display:flex;
            flex-direction:column;
            width:90%;
            order:1;
 
        }
         .checkh1{
                display:block;
         }
        .Container2 span{
            width: 139px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            margin-right:0;
        }
        h1{
            font-size:16px;
        }
}


`



const Footer = () => {
  return (
      <MobileContainer>
    <Container>
        <div className="mb-first">
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
        </div>
     
        <Content>
            <div className="check">
                <h1 className="checkh1">Contact Us</h1>
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
         
         </Content>
        
         
    </Container>

    <div className="not-flex">
        <OuterRight>
           <img className="image-nav" src="./Images/fb.png" alt="" />
           <img className="image-nav" src="./Images/Insta.png" alt="" />
           <img className="image-nav" src="./Images/Link.png" alt="" />
           <img className="image-nav" src="./Images/Mail.png" alt="" />
           
         </OuterRight>
         <div className="footer">
             <span>copyright@sohnijuneja.com</span>
         </div>
         </div>
    </MobileContainer>
  )
}

export default Footer