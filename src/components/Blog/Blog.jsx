import React,{useState,useEffect} from 'react'

import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import './Blog.css'
import Slider from "react-slick";
import './Blog.css'


const Container=styled.div`

width:100vw;
margin:auto;

@media (max-width: 768px){
    width:100%;
    margin-top:50px;
height:auto;
}
@media(max-width:600px) {
  slick-arrow{
    margin:0;
  }
}

`

const Wrapper=styled.div`

display:flex;
justify-content:space-around;
width:96vw;
margin:auto;


@media (max-width: 768px){
    width:100vw;
    height:auto;
    margin:auto;
    padding: 12px;
    .slick-arrow.slick-next {
      top: 40%;
  }

  
  .slick-arrow.slick-prev {
      top: 40%;
  }
  .p1{
    margin-bottom:0px;
  }
  .p1{

    margin-bottom:-15px !important;
   
  }
}



`
const Heading=styled.h1`

  text-align : center;
  margin-top:3rem;
  font-size: 40px;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: 768px){
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #464343;
    padding:0;
    
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
  width:418px;
  height:279px;
margin-left:28px;
margin-top:40px;
}
@media (max-width: 768px){
.p1{
  font-size:15px;
  text-align : center;
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
      width:95%;
      height:auto;
      margin-left:0;
      margin-top:0px;
      margin-left:2.5%;

  }
     

 }
`
const Third=styled.div`

img{
  width:418px;
  height:279px;
margin-left:28px;
margin-top:40px;
}

   flex:1;

   @media (max-width: 768px){
   
    .sc-bhVIhj{
   padding-bottom: 0;
    }
   }
 

 .p2,.p3{
    @media (max-width: 768px){
       display:none;
       
    }
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
    img{
      width:95%;
      height:auto;
      margin-left:0;
      margin-top:0px;
      margin-left:2.5%;

  }
       .p1{
        font-size:15px;
        text-align : center;
        margin-bottom: 15px;
        margin-left:0;
 }
`
const View=styled.div`

margin:auto;

   margin-top:25px;
  text-align:center;
  border: 1px solid;
  border-radius:20px;
  background-color:rgba(116, 113, 113, 1);
  color:#fff;
  width: 9em;
  font-size:20px;
  padding:8px;
  margin-top:48px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
margin-top:0;

a{
  text-decoration:none;
  color:inherit;
}


  
    @media (max-width: 768px){
       display:none;
    }
    

`
const Blog = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateFormat(d){
  var t = new Date(d);
  return t.getDate()+'-'+monthNames[t.getMonth()]+'-'+t.getFullYear();
}
  const source_url="https://sohnijuneja.com/blog/how-to-get-dewy-skin-without-makeup/get-dewy-skin-without-makeup/";

  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      async function loadPosts() {
          const response = await fetch('https://sohnijuneja.com/blog/wp-json/wp/v2/posts?_embed');
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
  
          const posts = await response.json();
          setPosts(posts);
          console.log(posts);
      }
  
      loadPosts();
 }, [])
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
     
      { posts[0] &&
<>
        <Heading>Blog</Heading>
        <Wrapper className="">
        <Slider className="sliderWrap sliderWrapAr sllAr2" {...settings}>

            <First>
            <a href={posts[0].guid.rendered}><img src={posts[0]._embedded['wp:featuredmedia']['0'].source_url} alt="makeup schools in delhi ncr"></img></a>
                <p className="p1"><a href={posts[0].guid.rendered}>{posts[0].title.rendered}</a></p>
                <p className="p2">By Sohni-{dateFormat(posts[0].date.substring(0,10))}</p>
                <p className="p3"><a href={posts[0].guid.rendered}>Read More</a></p>
            </First>
            <Second>
            <a href={posts[0].guid.rendered}><img src={posts[1]._embedded['wp:featuredmedia']['0'].source_url} alt="makeup schools in delhi"></img></a>
                <p className="p1"><a href={posts[1].guid.rendered}>{posts[1].title.rendered}</a></p>
                <p className="p2"> By Sohni-{dateFormat(posts[1].date.substring(0,10))}</p>
                <p className="p3"><a href={posts[1].guid.rendered}>Read More</a></p>
            </Second>
            <Third>
            
                  <div className="sc-bhVIhj">
                    
                  <a href={posts[0].guid.rendered}><img alt="makeup schools in dehradun" src={posts[2]._embedded['wp:featuredmedia']['0'].source_url}/></a>
                  </div>
                  
                <p className="p1"><a href={posts[2].guid.rendered}>{posts[2].title.rendered}</a></p>
                <p className="p2">By Sohni-{dateFormat(posts[2].date.substring(0,10))}</p>
                <p className="p3"><a href={posts[2].guid.rendered}>Read More</a></p>
            </Third>
        </Slider>

        </Wrapper>
        <View>
        <a href="https://sohnijuneja.com/blog">View More</a>
        </View>
        </>
      }
        
    </Container>
  )
}

export default Blog


// kljfsdakljfsdajfskdaj