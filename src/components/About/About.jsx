import React from 'react';
import './About.css';
import Header from '../Header/Header';
import aboutVector from "./../../assets/about_vector.png";
import FooterLink from "../FooterLink/FooterLink";
import aboutAnime from "./../../assets/about_anime.gif";

const About=()=>{
    return (
      <div className="section-container">
        <Header
          heading="About Me."
          details="I am a hustler who loves to identify problems around and try to solve it using my technical skills with simplicity. I love learning new technologies and developing innovative projects that can solve real life problems."
        />

        <div className="about-main">
          <div className="about-main-left">
            {/* Sub section 1 */}
            <h3 className="about-sub-head">Student</h3>
            <p className="about-details">
              I am a student, currently pursuing Masters in Computer Application
              (MCA) from Thakur institute of management and career development
              research. I had completed my bachelors degree from Nagindas
              Khandwala college (Bsc-cs) in the year 2020. I love to learn new
              technologies.{" "}
            </p>

            {/* Sub section 2 */}
            <h3 className="about-sub-head">Android Development Enthusiast</h3>
            <p className="about-details">
              I love to develop innovative android applications. I like
              java, kotlin and I always welcome any such opportunities that
              involves android development.
            </p>

            {/* Sub section 3 */}
            <h3 className="about-sub-head">Volunteer</h3>
            <p className="about-details">
             I love to work for environment. During my degree days i was a part of an NGO (CASI) during this peroid i was part
             of various environment drives such as tree plantation, beach cleaning, spreading awareness against pollution etc. {" "}
    
            </p>
          </div>

          <div className="about-main-right">
            <img src={aboutAnime} alt="animation" className="about-anime" />
          </div>
        </div>

        <FooterLink
          phrase="Check out my "
          link="projects!"
          toAdress="/projects"
        />
        {/* Vector Frame! */}
        <div className="vector-frame">
          <img src={aboutVector} className="about-vector" alt="about" />
        </div>
      </div>
    );
}
export default About;