import React from 'react';
import back from '../assets/images/aboutmeBackground.jpg';
import throne from '../assets/images/quoteofthrones.png';
import book from '../assets/images/bookwormy.png';
import schedule from '../assets/images/schedule.png';
import './projects.css';

export default function Projects() {
  return (
    <div className="project-container">
      <img src={back} alt="not available" className="back" />
      <h1 className="project-title">Projects</h1>
    
      <div className="image-container">
        <div className="project-image">
          <a href="http://bookwormy.herokuapp.com/">
          <img src={book} alt="not available" className="book" />
          </a>
          <a href="https://thecolorhieu.github.io/Quotes-of-Thrones/">
          <img src={throne} alt="not available" className="throne" />
          </a>
          <a href="https://silverfae.github.io/scheduler/">
          <img src={schedule} alt="not available" className="schedule" />
          </a>
        </div>
      </div>
    </div>
  );
}
