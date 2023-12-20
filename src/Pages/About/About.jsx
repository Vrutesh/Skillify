import React from "react";
import "./About.css";
import slogoblack from "../../assets/Images/Slogoblack.png";
import heroBg from "../../assets/Images/Herobg.jpg";

function About() {
  return (
    <div className="mr">
      <section>
        <div className="hero-section">
          <div className="left-hero-section">
            <img src={slogoblack} alt="slogo" />
            <h1 className="loader">Skillify</h1>
            <h4>Leading Quiz Platform for Skill Excellence.</h4>
            <p>
              Where Skills Unleashed, from novices to experts, fostering growth,
              one assessment at a time. Your journey, your empowerment.
            </p>
            <span class="loading"></span>
          </div>
          <div className="right-hero-section">
            <img src={heroBg} />
          </div>
        </div>
      </section>

      <section className="about-content">
        <h1>Skillify</h1>
        <p>
          {" "}
          Skillify is a user-friendly and versatile skill assessment platform
          designed to help individuals evaluate and enhance their abilities.
          Whether you're a professional honing your expertise or a newcomer
          looking to identify areas for improvement.
        </p>
        <p>
          Skillify is designed to cater to everyone, from seasoned experts to
          curious newcomers, providing an accessible and enjoyable way to test
          and expand your knowledge.
        </p>
      </section>

      <section className="about-skillify">
        <h1 className="about-skillify-faq-heading">
          Frequently asked questions (FAQs)
        </h1>
        <p className="about-skillify-faq-info">
          Want to know more about Skillify ? Here are answers to the most
          commonly asked questions about our company.
        </p>
        <div className="faq-about-skillify">
          <div className="faq-about-skillify-heading">
            <p>1</p>
            <h1>WHY SKILLIFY ?</h1>
          </div>
          <p>
            In a world that's constantly evolving, where skills are valued more
            than ever, choosing the right skill assessment platform is pivotal
            for personal and professional growth. Skillify stands out as a
            beacon in this landscape, offering a user-friendly and versatile
            experience that empowers individuals of all backgrounds to evaluate,
            enhance, and embrace their abilities.
          </p>
        </div>

        <div className="faq-about-skillify">
          <div className="faq-about-skillify-heading">
            <p>2</p>
            <h1>
              What are the different types of tests available on Skillify ?
            </h1>
          </div>
          <p>
            Skillify revolutionizes skill assessment with Role Specific Tests,
            Programming Tests, and Software Skills Tests. Elevate your skills
            with Skillify's user-friendly interface, propelling your
            professional growth.
          </p>
        </div>

        <div className="faq-about-skillify">
          <div className="faq-about-skillify-heading">
            <p>3</p>
            <h1> How can users get started on Skillify ?</h1>
          </div>
          <p>
            Getting started is easy. Simply sign up on Skillify, choose the
            assessment that aligns with your goals, and embark on a journey of
            skill evaluation and enhancement. The platform's user-friendly
            interface ensures a seamless experience for all users.
          </p>
        </div>

        <div className="faq-about-skillify">
          <div className="faq-about-skillify-heading">
            <p>4</p>
            <h1>
              {" "}
              Can newcomers benefit from Skillify's skill assessment platform ?
            </h1>
          </div>
          <p>
            Absolutely! Skillify is accessible to curious newcomers, offering an
            enjoyable way to identify areas for improvement. The platform guides
            them through assessments and provides insights for continuous skill
            enhancement.
          </p>
        </div>

        <div className="faq-about-skillify">
          <div className="faq-about-skillify-heading">
            <p>5</p>
            <h1>Who can benefit from Skillify's skill assessment platform?</h1>
          </div>
          <p>
            Skillify is designed for individuals at all skill levels. Whether
            you're a seasoned professional aiming to refine expertise or a
            newcomer seeking improvement, our platform caters to everyone.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
