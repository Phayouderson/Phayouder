import React from 'react';
import './Form.css'

const Form = () => {

  return (
     
    <div className="form-container" id="contact">
      <div>
        <h1>Contact</h1>
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>
      <form className='contact-form' action="https://getform.io/f/58e13613-03be-4ea2-8047-d77d00b587ec" method="POST">
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            placeholder='Enter your Name'/>
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            placeholder='Enter your email'/>
        </label>
        <br />
        <label>
          Message:
          <textarea 
            name="message" 
            rows="10"
            placeholder='Enter your message' />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
