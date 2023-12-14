import React from "react";
import "./About.css";
import Slogo from "../../assets/Images/S-logo.png"




function About() {
  return(
    <div className="mr">
     <section>
      <div className="hero-section">
        <div className="left-hero-section">
          <img src={Slogo} alt="slogo" />
        <h1>Skillify</h1>
        <h4>Leading Quiz Platform for Skill Excellence</h4>
        <p></p>
        </div>
        <div className="right-hero-section">
        </div>
      </div>
     </section>

     <section className="about-content">
      <h1>Skillify</h1>
      <p> Skillify is a user-friendly and versatile skill assessment platform designed to help individuals evaluate and enhance their abilities. Whether you're a professional honing your expertise or a newcomer looking to identify areas for improvement.</p>
      <p>Skillify is designed to cater to everyone, from seasoned experts to curious newcomers, providing an accessible and enjoyable way to test and expand your knowledge.</p>
     </section>
   
    </div>
  );
}

export default About;
