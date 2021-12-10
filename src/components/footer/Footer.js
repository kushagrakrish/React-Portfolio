import React, { Component } from "react";
import "./footer.scss";
import fb from "../footer/fb.svg";
import ig from "../footer/ig.svg";
import linkedin from "../footer/linkedin.svg";
import git from "../footer/git.svg";

export const FooterItem = (props) => {
  return (
    <a
      href={props.path}
      className='social-link'
      target='_blank'
      rel='noreferrer'
    >
      <div className='social-img-container-footer'>
        <img src={props.img} alt='' />
      </div>
    </a>
  );
};
const navItems = [
  {
    label: "Home",
    path: "https://www.google.com",
  },
  {
    label: "About Me",
    path: "#about-me",
  },
  {
    label: "skills",
    path: "#skills",
  },
  {
    label: "Services",
    path: "#services",
  },
  {
    label: "Contact Me",
    path: "#contact-me",
  },
];

export class Footer extends Component {
  render() {
    return (
      <section className='footer'>
        <div className='footer-container wrapper'>
          {/* <h2>Kushagra Krishna</h2> */}
          <div className='social-media-footer'>
            <FooterItem
              img={fb}
              path='https://www.facebook.com/kushagra.krishna.37/'
            />
            <FooterItem img={git} path='https://google.com' />
            <FooterItem img={ig} path='https://google.com' />
            <FooterItem img={linkedin} path='https://google.com' />
          </div>
          <ul className='footer-item'>
            {navItems.map((navItem, idx) => (
              <li key={idx} className='footer-items'>
                <a href={navItem.path}>{navItem.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-last'>
          Crafted with ❤️ by Kushagra Krishna
          <p>
            © 2020 All rights reserved. Designed & Developed by Kushagra Krishna
          </p>
        </div>
      </section>
    );
  }
}

export default Footer;
