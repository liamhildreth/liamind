import React, {Component} from 'react';
import "./interests.css"
import {Carousel} from "react-bootstrap"
import lecture from "../../lastlecture.jpg";
import gods from "../../againstthegods.jpg";
import icb from "../../icb.jpg";

class interests extends Component{
    render(){
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
      
        <Carousel>
  <Carousel.Item interval={null}>
    <img
      className="d-block w-100"
      src={gods}
      alt="First slide"
      width="300px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={null}>
    <img
      className="d-block w-100"
      src={lecture}
      alt="Second slide"
      width="300px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={null}>
    <img
      className="d-block w-100"
      src={icb}
      alt="Third slide"
      width="300px"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  );
}
}

export default interests;