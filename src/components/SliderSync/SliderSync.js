

import React, { Component } from "react";
import Slider from "react-slick";
import './SliderSync.css'


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


    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
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
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={true}
        >
          <div className="img-slide">
        <img src="./Images/Rectangle 68.png" alt="" width="50px" height="auto" />
        </div>
        <div className="img-slide">
        <img src="./Images/Rectangle 46.png" alt="" width="50px" height="auto" />
        </div>
        <div className="img-slide">
        <img src="./Images/Rectangle 76.png" alt="" width="50px" height="auto" />
        </div>
        <div className="img-slide">
        <img src="./Images/Rectangle 77.png" alt="" width="50px" height="auto" />
        </div>
        </Slider>
      </div>
    );
  }
}