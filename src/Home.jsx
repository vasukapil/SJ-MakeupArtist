import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Services from './components/Service/Service'
import Social from './components/Socials/Social'
import Testimonial from './components/Testimonial/Testimonial'
import Blog from './components/Blog/Blog'
import Accordian from './components/Accordian/Accordian'
import Accolades from './components/Accolades/Accolades'
import { Form } from './components/Popup/Form'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Service from './components/Service/Service'
import { Media } from './components/Media/Media'
import Publication from './components/Publication/Publication'
import ContactUs from './components/ContactUs/ContactUs'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Modal from './components/Modal/Modal'
import CarouselUse from './components/Carousel/CarouselUse'
import Responsive from './components/Gallery/Responsive'
import Book from './components/Book/Book'
import SliderSync from './components/SliderSync/SliderSync'
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider'
import Coaching from './components/Coaching/Coaching'





const Home = () => {
  return (
    <div>
         <Navbar/>
         <Main/>
      

        <Book/>
        <Coaching/>
        <Social/>
        <TestimonialSlider/>
        <Blog/>
        <Accolades/>
        <Accordian/>
        <Footer/>
      
              
    </div>
  )
}

export default Home

//kjhfksdajhkjfashhdfsak