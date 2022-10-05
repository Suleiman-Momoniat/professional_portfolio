import React from 'react';
import './about.css';
import Me from '../../assets/Suli.jpeg';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Academics</h5>
              <small>Honours ComSci Cum Laude</small>
            </article>
          </div>
          <p>
          I am a software engineer currently working on web development with a background in 
          Computer Science and Philosophy. I have a huge drive for growth and I am a keen 
          learner who believes in lifelong learning. I enjoy being able to use my creativity 
          to bring a new perspective to solving problems. I am driven by a desire to create 
          value, to help others and to leave the world better than I found it. Being one of 
          the top graduates at Huawei after my studies has taught me the value to hard work, 
          but more importantly smart work. I believe that one should strive for balance in 
          order to live life to the fullest and I do so by practicing meditation and karate.
          </p>

          <div className="lets-talk-container">
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About