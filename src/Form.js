import React, { useState } from 'react';
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      e.target.submit();
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <div className="form-container" id="contact">
      <div>
        <h1>Contact <br/><scan className="textline"></scan></h1>
        <p>Have a question or want to work together?</p>
      </div>
      <form className='contact-form' action="https://getform.io/f/58e13613-03be-4ea2-8047-d77d00b587ec" method="POST" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          className={formData.name.trim() !== '' ? 'input-focused' : ''}

        />
        {errors.name && <span className="error">{errors.name}</span>}
        <br/>
        <input 
          type="email" 
          name="email" 
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          className={formData.email.trim() !== '' ? 'input-focused' : ''}

        />
        {errors.email && <span className="error">{errors.email}</span>}
        <br/>
        <textarea
          name="message"
          rows="6"
          placeholder='Your message'
          value={formData.message}
          onChange={handleChange}
          className={formData.message.trim() !== '' ? 'input-focused' : ''}
        />
        {errors.message && <span className="error">{errors.message}</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
