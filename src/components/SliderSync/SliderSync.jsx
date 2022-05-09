

import { Settings } from "@material-ui/icons";
import React, { Component, useState } from "react";
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
      nav2: null,
      num :1,
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
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className="SampleNextArrow" />,
        prevArrow: <SamplePrevArrow className="SamplePrevArrow" />,
        responsive: [

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,

            // initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
          }
        }
      ]
      };


    return (
      <div>
    
        <div className="sliderContainer reArrow">
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >

          <div className="firstimgSS">
            <img src={`./Images/sliImg/Rectangle${this.state.num}1.png`} alt="" width="250px" height="auto" />
           
            </div>
            <div className="firstimgSS">
            <img src={`./Images/sliImg/Rectangle${this.state.num}2.png`} alt="" width="250px" height="auto" />
            
            </div>
            <div className="firstimgSS">
            <img src={`./Images/sliImg/Rectangle${this.state.num}3.png`} alt="" width="250px" height="auto" />
            
            </div>
         
        </Slider>
        </div>

        <div className="img-slider-contain">
    
        {/* <Slider {...Settings}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}  
        > */}
           
          <div onClick={()=>this.setState({ num: 1 })} className="img-slide" id={this.state.num===1 ? "active" : ""}>
        <img className="same1"  src="./Images/Rectangle 76.jpg" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2"  width="250px">Bridal Look</h2>
        </div>
        <div onClick={()=>this.setState({ num: 2 })} className="img-slide" id={this.state.num===2 ? "active" : ""}>
        <img className="same1"  src="./Images/Rectangle 46.jpg" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2" width="250px">Party Look</h2>
        </div>
        <div onClick={()=>this.setState({ num: 3 })} className="img-slide" id={this.state.num===3 ? "active" : ""}>
        <img className="same1"  src="./Images/Rectangle 77.jpg" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2" width="250px">Fashion</h2>
        </div>
        <div onClick={()=>this.setState({ num: 4 })} className="img-slide" id={this.state.num===4 ? "active" : ""}>
        <img className="same1"  src="./Images/Rectangle 78.jpg" alt="" width="115px" height="auto" />
        <h2 className="img-slide-h2" width="250px">Day Look</h2>
        </div>
        
        {/* </Slider> */}
        </div>
      </div>
    );
  }
}