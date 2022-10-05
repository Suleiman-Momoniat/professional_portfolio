import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uujzx7k', 'template_z7xb901', form.current, 'U99pM-BswkPrFc8wN');

    e.target.reset();  
    };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' />
          <textarea type="text" name="message" rows="7" placeholder='Your Message' required ></textarea>
          <div className='send-msg-container'>
            <button type='submit' className='btn btn-primary btn-send-msg'>Send Message</button>
          </div>
        </form>
      </div>
      </section>
  )
}

export default Contact