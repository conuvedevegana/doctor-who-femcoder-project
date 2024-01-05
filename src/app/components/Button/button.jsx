import React from 'react';
import styles from './button.module.css';

export default function Button() {
  return (
    <button className={styles.button}>
          <a href="https://www.doctorwho.tv/" target="_blank">
            Ver más
          </a>
        </button>
  )
}
