import React, { Component } from "react";
import "./hero.scss";
import { Typewriter } from "react-simple-typewriter";
// import video from "../hero_section/video.mp4";

export class Hero extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleType = this.handleType.bind(this);
  //   this.handleDone = this.handleDone.bind(this);
  // }

  // handleType(count) {
  //   console.log(count);
  // }

  // handleDone() {
  //   console.log(`Done after 5 loops!`);
  // }
  render() {
    return (
      <section className='hero-section' id='home'>
        <div className='hero-content'>
          <h1>Kushagra Krishna</h1>
          <div className='typewriter'>
            <span className='span-class'> I'm </span>
            <div className='typecolor'>
              <Typewriter
                words={["A Web Developer", "A Designer", "A Photographer"]}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={170}
                deleteSpeed={110}
                delaySpeed={1200}
                // onLoopDone={() => handleDone}
                // onType={() => handleType}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
