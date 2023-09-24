import React from 'react';
import prof from '../assets/images/prof.jpeg';
import back from '../assets/images/background.png';
import './about.css';

export default function About() {
  return (
    <div>
      <div className="about-header">
        <img src={back} alt="not available" className="back" />
        
      </div>
      <div className="about-container">
        <img src={prof} alt="Shannon Hogeboom" className="prof" />
        <div className="about-text">
          <p>
          I am an upcoming Full Stack Developer with a strong passion for crafting innovative digital solutions. Recently, I achieved a significant milestone 
          in my career by obtaining my Full Stack Development certification from Arizona State University (ASU). This intensive program equipped me with a diverse 
          skill set encompassing both front-end and back-end technologies, enabling me to create seamless and user-friendly web applications. With a keen eye for
          detail and a commitment to staying at the forefront of technology trends, I am dedicated to delivering top-notch software solutions that empower businesses
          and delight users. I am excited to embark on this rewarding journey, harnessing my newfound knowledge and skills to contribute meaningfully to the world 
          of web development.
          </p>
        </div>
      </div>
    </div>
  );
}
