import React, { Component } from "react";
import "./contact.scss";
import fb from "../contact-me/fb.png";
import call from "../contact-me/call.png";
import git from "../contact-me/github.png";
import ig from "../contact-me/instagram.png";
import mail from "../contact-me/mail.png";
import linkedin from "../contact-me/linkedin.png";
import share from "../contact-me/share.svg";

export const SocialImg = (props) => {
  return (
    <a
      href={props.link}
      className='social-link'
      target='_blank'
      rel='noreferrer'
    >
      <div className='social-img-container'>
        <img src={props.img} alt='' />
      </div>
    </a>
  );
};

export class Contact extends Component {
  render() {
    return (
      <section className='contact-me' id='contact-me'>
        <div className='contact-me-container wrapper'>
          <div className='contact-card-1'>
            <div className='social-title-img-container'>
              <img src={share} alt='#' />
            </div>
            <h2>Social Profiles</h2>
            <div className='social-media-container'>
              <SocialImg
                link='https://www.facebook.com/kushagra.krishna.37/'
                img={fb}
              />
              <SocialImg img={git} link='https://github.com/kushagrakrish' />
              <SocialImg
                img={ig}
                link='https://www.instagram.com/kushhhagrakrish/'
              />
              <SocialImg
                img={linkedin}
                link='www.linkedin.com/in/kushagra-krishna-69b22a179'
              />
            </div>
          </div>
          <div className='contact-card-2'>
            <div className='contact-card-email'>
              <div className='email-img-container'>
                <img src={call} alt='#' />
              </div>
              <h2>Phone No.</h2>
              <p>
                <a href='tel:7000366369'>7000366369 </a>
              </p>
            </div>
            <div className='contact-card-phone'>
              <div className='phone-img-container'>
                <img src={mail} alt='#' />
              </div>
              <h2>E-mail</h2>
              <p>
                <a href='mailto:krishna619kk@gmail.com'>
                  Krishna619kk@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
