
import Testimonial from '../Testimonial/Testimonial'

import React, { Component } from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
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
            // initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          }
        }
      ]
    };
    return (
      <div className="SS sllAr">
      <h1>Testimonials</h1>
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