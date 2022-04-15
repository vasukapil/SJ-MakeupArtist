
import Testimonial from '../Testimonial/Testimonial'

import React, { Component } from "react";
import Slider from "react-slick";
import './TestimonialSlider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,responsive: [
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
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div className="SS">
      
        <Slider {...settings}>
          <div>
            <Testimonial/>
          </div>
          <div>
            <Testimonial/>
          </div>
          <div>
            <Testimonial/>
          </div>
        </Slider>
      </div>
    );
  }
}