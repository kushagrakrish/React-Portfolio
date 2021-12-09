import React, { Component } from "react";
import "./aboutme.scss";
import self from "../about-me/DP.jpg";
import resume from "../about-me/KushagraKrishna.pdf";

export const ListItem = (props) => {
  return (
    <li className='about-me-item'>
      <i className='fas fa-chevron-right li-item-margin'></i>
      <span className='about-me-item-bold'>{props.label}</span>
      <span className='about-me-item-light'>{props.value}</span>
    </li>
  );
};

export class Aboutme extends Component {
  render() {
    return (
      <>
        <section className='about-me' id='about-me'>
          <h1>ABOUT ME</h1>
          <p className='about-me-content '>
            I'm kushagra Krishna from Indore, India.
            <br /> Web development has always been something that excites me the
            most. My spare time is usually spent making some cool visual
            concepts and graphic designing. Adding up on the creativity game,
            Wildlife Photography allows me to bring out the nomad in me!
          </p>
          <div className='about-me-container-content wrapper'>
            <div className='profile-img-container'>
              <img src={self} alt='#' />
            </div>
            <div className='about-me-content-title'>
              <h1>Web Designer & Web developer</h1>
              <p>
                I'm proficient with REACT, JS, HTML, Saas,CSS, along with an
                endless zeal to learn and constantly upskill myself with other
                technologies. I'm regularly working on broadening my areas of
                expertise along with my work experience. <br />
                <br />
                Being a tech geek, and a fitness fanatic, I struggle quite often
                with giving myself a break, but When I do, I make sure to enjoy
                by watching some of my favorite anime and listening to good old
                classics.
              </p>
              {/* <ul className='about-me-items'>
                <div className='about-me-item1'>
                  <ListItem label='Birthday:' value='22 April 2002' />
                  <ListItem label='City:' value='Indore' />
                  <ListItem label='Phone:' value='7000366369' />
                </div>
                <div className='about-me-item2'>
                  <ListItem label='Email:' value='krishna619kk@gmail.com' />
                  <ListItem label='Freelancing:' value='Available' />
                  <ListItem label=':' value='krishna619kk@gmail.com' />
                </div>
              </ul> */}
              <div className='about-me-para'>
                <p></p>
                <button className='resume-btn' href={resume} download={resume}>
                  <a href={resume} download={resume}>
                    Check my Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Aboutme;
