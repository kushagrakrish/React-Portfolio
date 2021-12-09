import React, { Component } from "react";
import "./skills.scss";
import portFolio from "../skills/Portfolio_Tools-01.svg";
import skill from "../skills/skill.gif";

export class Skills extends Component {
  render() {
    return (
      <section className='skills' id='skills'>
        <h1>My Skills</h1>
        <div className='skill-container wrapper'>
          <div className='skill-img'>
            <img src={portFolio} alt='' />
          </div>

          <div className='skill-gif'>
            <img src={skill} alt='' />
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
