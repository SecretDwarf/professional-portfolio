import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS configuration
    const serviceId = 'service_ngdq8ip';
    const templateId = 'template_etzkr3j';
    const publicKey = 'a873oImiRmtnwL9lK';

    // Initialize EmailJS with your public key
    emailjs.init(publicKey);

    // Prepare the template parameters
    const templateParams = {
      to_name: 'Jacob Briggs',
      from_name: name,
      email,
      message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <main>
        <form onSubmit={handleSubmit} className="contact-form">
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="contact-input contact-input-name"
            />
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="contact-input contact-input-email"
            />
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="contact-input contact-input-message"
            ></textarea>
        <button type="submit" className="contact-submit">Send</button>
        </form>
    </main>
  );
};

export default ContactForm;
