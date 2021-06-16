import React from 'react';
import './Skills.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import skillsVector from './../../assets/skills_vector.png';
import {skillList} from './../../assets/skillsData';
import SkillCard from "./SkillCard";

const Skills=()=>{
    return (
      <div className="section-container">
        <Header
          heading="My Skills."
          details="I love to learn new technologies and develop projects. I try to simplify things with my creativity. "
        />

        <div className="skill-card-container">
          {skillList.map(({ skillName, skillUrl }) => (
            <SkillCard skillName={skillName} skillUrl={skillUrl} />
          ))}
        </div>

        <FooterLink phrase="Get in " link="touch." toAdress="/contact" />

        <div className="skills-vector-frame">
          <img src={skillsVector} alt="skills" className="skills-vector" />
        </div>
      </div>
    );
}

export default Skills;