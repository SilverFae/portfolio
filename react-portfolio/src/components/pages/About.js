import React from 'react';
import prof from '../assets/images/UnlinedHospitableAgama-size_restricted.gif';
import back from '../assets/images/aboutmeBackground.jpg';
import './about.css';

export default function About() {
  return (
    <div>
      <div className="about-header">
      <h1 className="about-title">About Me</h1>
        <img src={back} alt="not available" className="back" />
        
      </div>
      <div className="about-container">
        <img src={prof} alt="Shannon Hogeboom" className="prof" />
        <div className="about-text">
          <p>
            Greetings! I am an aspiring frontend developer with a strong desire to venture into the captivating world of game development!
            My passion for learning and creating knows no bounds, and I am thrilled to merge my artistic background and design skills with my technical expertise.

            Currently, I am engrossed in a personal project, which I am eagerly anticipating releasing in the near future. Moreover, I am proud to share that I successfully completed the full-stack coding bootcamp at Arizona State University,
            a transformative experience that has equipped me with valuable coding knowledge and the ability to collaborate effectively with others.

            As I journey forward, my unwavering commitment is to continue my growth as a developer, embracing new challenges and continuously expanding my skill set. Exciting times lie ahead, and I can't wait to explore the endless
            possibilities this thrilling field has to offer!
          </p>
        </div>
      </div>
    </div>
  );
}
