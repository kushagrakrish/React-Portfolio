import React, { Component } from "react";
import "./header.scss";

const navItems = [
  {
    label: "Home",
    path: "#home",
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

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBarClose: true,
      // navBarCross: false,
    };
  }

  render() {
    return (
      <>
        <header className='header'>
          <div className='header-container wrapper'>
            <div
              className='burger'
              onClick={() =>
                this.setState({ navBarClose: !this.state.navBarClose })
              }
            >
              <i
                className={`${
                  this.state.navBarClose ? "fas fa-bars" : "fa-solid fa-xmark"
                }`}
                onClick={() =>
                  this.setState({ navBarCross: !this.setState.navBarCross })
                }
              ></i>
            </div>
            <ul
              className={`${
                this.state.navBarClose ? "header-item-close" : ""
              } header-item`}
            >
              {navItems.map((navitem, idx) => (
                <li key={idx} className='header-items'>
                  <a href={navitem.path}>{navitem.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
