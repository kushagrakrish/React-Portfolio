import React, { useEffect, useRef } from "react";
import "./hero.scss";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-web";

function Hero1() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../hero_section/scrool.json"),
    });
  }, []);
  return (
    <section className='hero-section' id='home'>
      <div className='hero-content'>
        <div className='type-wrapper'>
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
        <div className='container' ref={container}></div>
      </div>
    </section>
  );
}

export default Hero1;
