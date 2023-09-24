import React from 'react';
import './resume.css';

const Resume = () => {
  const handleDownload = () => {
  const resumeFileName = 'upRes.pdf';
    const resumePath = process.env.PUBLIC_URL + '/assets' + resumeFileName;

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resumeFileName; // Set the desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Check if the download was successful
    setTimeout(() => {
      const isDownloaded = document.body.contains(link);
      if (!isDownloaded) {
        console.log('Resume download successful.');
      } else {
        console.error('Resume download failed.');
      }
    }, 1000); // Delay the check for 1 second to allow time for the download
  };

  return (
    <div className="resume-container">
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
            <tr>
              <td>Bootstrap</td>
            </tr>
            <tr>
              <td>Materialize</td>
            </tr>
            <tr>
              <td>Git</td>
            </tr>
            <tr>
              <td>Apollo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Resume;
