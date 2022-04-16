

import { Settings } from "@material-ui/icons";
import React, { Component } from "react";
import Slider from "react-slick";
import './SliderSync.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"
       }}
        onClick={onClick}
      />
    );
  }


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className="SampleNextArrow" />,
        prevArrow: <SamplePrevArrow className="SamplePrevArrow" />
      };


    return (
      <div>
    
        <div className="sliderContainer">
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >

          <div className="firstimgSS">
            <img src="./Images/Rectangle 70.png" alt="" width="250px" height="auto" />
           
            </div>
            <div className="firstimgSS">
            <img src="./Images/Rectangle 58.png" alt="" width="250px" height="auto" />
            
            </div>
            <div className="firstimgSS">
            <img src="./Images/Rectangle 60.png" alt="" width="250px" height="auto" />
            
            </div>
            <div className="firstimgSS">
            <img src="./Images/Rectangle 59.png" alt="" width="250px" height="auto" />
            
            </div>
         
        </Slider>
        </div>

        <div className="img-slider-contain">
    
        <Slider {...Settings}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        
          
        >
           
          <div className="img-slide">
        <img src="./Images/Rectangle 78.png" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2"  width="250px">Bridal Look</h2>
        </div>
        <div className="img-slide">
        <img src="./Images/Rectangle 46.png" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2" width="250px">Party Look</h2>
        </div>
        <div className="img-slide">
        <img src="./Images/Rectangle 76.png" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2" width="250px">Fashion</h2>
        </div>
        <div className="img-slide">
        <img src="./Images/Rectangle 77.png" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2" width="250px">Day Look</h2>
        </div>
        
        </Slider>
        </div>
      </div>
    );
  }
}