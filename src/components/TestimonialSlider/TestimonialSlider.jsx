
import Testimonial from '../Testimonial/Testimonial'

import React, { Component } from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";
import Testimonial2 from '../Testimonial/Testimonial2';
import Testimonial3 from '../Testimonial/Testimonial3';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true

            // initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
            dots: true

          }
        }
      ]
    };
    return (
      <div className="sllAr sllAr2">
      <h1>Testimonials</h1>
        <Slider {...settings}>
          <div className="sl1">
            <Testimonial/>
          </div>
          <div className="sl2">
            <Testimonial2/>
          </div>
          <div className="sl3">
            <Testimonial3/>
          </div>
        </Slider>
      </div>
    );
  }
}