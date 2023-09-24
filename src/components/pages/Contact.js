import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://webdev-portfolio-816a16b060ef.herokuapp.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Log the response
      console.log('Response:', response);

      if (response.ok) {
        setSubmitMessage('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage('Error submitting form');
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage('Error submitting form');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <body className="contactBody">
      <div className='contact-container'>
        <h1 className='contact-title'>Contact Me</h1>
      </div>
      <div className='contactForm'>
        <form id='contact-form' onSubmit={handleSubmit} noValidate>
          <div className='row formRow'>
            <div className='col-6'>
              <input
                type='text'
                name='name'
                className='form-control formInput'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='col-6'>
              <input
                type='email'
                name='email'
                className='form-control formInput'
                placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='row formRow'>
            <div className='col'>
              <input
                type='text'
                name='subject'
                className='form-control formInput'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='row formRow'>
            <div className='col'>
              <textarea
                rows={3}
                name='message'
                className='form-control formInput textarea' /* Add the 'textarea' class */
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className='submit-btn' type='submit'>
            Submit
          </button>
        </form>
        {submitMessage && <p className='submit-message'>{submitMessage}</p>}
      </div>
    </body>
  );
};

export default Contact;

