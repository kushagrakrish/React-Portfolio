import React, { Component } from "react";
import "./services.scss";
import camera from "../services/camera.png";
import graphic from "../services/graphic.png";
import web from "../services/web.png";

export const CardItem = (props) => {
  return (
    <div className='card'>
      <div className='card-img-container'>
        <img src={props.img} alt='' />
      </div>
      <h2>{props.label}</h2>
      <p>{props.value}</p>
      <i className='fas fa-arrow-circle-right service-arrow'></i>
    </div>
  );
};

export class Services extends Component {
  render() {
    return (
      <section className='services' id='services'>
        <h1>SERVICES</h1>
        <div className='services-container wrapper'>
          <CardItem
            img={web}
            label='Development'
            value='My projects are based on HTML, CSS, Javascript and ReactJS.'
          />
          <CardItem
            img={graphic}
            label='Design'
            value='My services includes graphic designing,logo designing.'
          />
          <CardItem
            img={camera}
            label='Photography'
            value='I am a aspiring Photographer. I like Wildlife photography, Street
            photography.'
          />
        </div>
      </section>
    );
  }
}

export default Services;
