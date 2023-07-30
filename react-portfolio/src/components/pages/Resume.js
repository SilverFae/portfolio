import React from 'react';
import back from '../assets/images/aboutmeBackground.jpg';
import './resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your resume file
    const resumePath = '../assets/images/upRes.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'your-resume.pdf'; // Set the desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <img src={back} alt="not available" className="back" />
      <div className='resumeHeader'>
        <h1>Resume</h1>
        <button className='resumeBtn' onClick={handleDownload}>
          Download Resume
        </button>
      </div>
      <div className='techTable'>
    
        <table className="table">
          <thead>
            <tr>
              <th><h1>Technical Skills</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React</td>
            </tr>
            <tr>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>HTML</td>
            </tr>
            <tr>
              <td>CSS</td>
            </tr>
            <tr>
              <td>Node.js</td>
            </tr>
            <tr>
              <td>Express.js</td>
            </tr>
            <tr>
              <td>MySQL</td>
            </tr>
            <tr>
              <td>MongoDB</td>
            </tr>
            <tr>
              <td>Sequelize</td>
            </tr>
            <tr>
              <td>Mongoose</td>
            </tr>
            <tr>
              <td>Handlebars</td>
            </tr>
            <tr>
              <td>jQuery</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Resume;
