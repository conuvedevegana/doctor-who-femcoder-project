// components/ContactForm.js
import React from 'react';
import styles from './Contactform.module.css'


export default function Form() {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};




