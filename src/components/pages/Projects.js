
import React from 'react';
import book from '../assets/images/bookwormy.png';
import throne from '../assets/images/quoteofthrones.png';
import schedule from '../assets/images/schedule.png';
import pokemon from '../assets/images/pokemon.jpeg';
import './projects.css';

export default function Projects() {
  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>

      <div className="image-container">
        <div className="project-card">
          <a href="http://bookwormy.herokuapp.com/">
            <img src={book} alt="Bookwormy" className="book" />
          </a>
          <div className="project-buttons">
            <a href="https://github.com/TheColorHieu/BookWorm/">GitHub</a>
            <a href="http://bookwormy.herokuapp.com/">Deployed App</a>
          </div>
        </div>

        <div className="project-card">
          <a href="https://thecolorhieu.github.io/Quotes-of-Thrones/">
            <img src={throne} alt="Quotes of Thrones" className="throne" />
          </a>
          <div className="project-buttons">
            <a href="https://github.com/your-username/Quotes-of-Thrones">GitHub</a>
            <a href="https://thecolorhieu.github.io/Quotes-of-Thrones/">Deployed App</a>
          </div>
        </div>

        <div className="project-card">
          <a href="https://silverfae.github.io/scheduler/">
            <img src={schedule} alt="Scheduler" className="schedule" />
          </a>
          <div className="project-buttons">
            <a href="https://github.com/your-username/scheduler">GitHub</a>
            <a href="https://silverfae.github.io/scheduler/">Deployed App</a>
          </div>
        </div>

        <div className="project-card">
          <a href="https://github.com/IamAdamJFox/Pokemon-not/">
            <img src={pokemon} alt="Pokemon" className="pokemon" />
          </a>
          <div className="project-buttons">
            <a href="https://github.com/IamAdamJFox/Pokemon-not/">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
