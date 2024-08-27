// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-page"> 
      <Header
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection={false}
      />
      <div className="background-container">
        <img
          className="background-image"
          alt="Background"
          src="/login-sections1@3x.png"
        />
        <div className="text-overlay">
          <header className="about-us-header">
            <h1>Mira's Pathfinders</h1>
            <p>Founded by Miracle</p>
            <p>Web Development by Dave Daniel</p>
          </header>
          <section className="about-us-content">
            <h2>Our Journey</h2>
            <p>
              Mira's Pathfinders began in 2020 with a vision to make a difference through technology.
              Our journey started with small steps, focusing on registration and initial setup.
              By 2021, we fully realized our vision and have been dedicated to providing exceptional
              services ever since.
            </p>
            <p>
              We are passionate about helping individuals and businesses achieve their goals through
              innovative solutions and a commitment to excellence.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
