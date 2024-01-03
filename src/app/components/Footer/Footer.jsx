import React from 'react'
import styles from './Footer.module.css';
import SocialMedia from '../SocialMedia/socialMedia';

export default function Footer() {
    const iconsFolder = "/img/icons/"
  return (
    <div className={styles.footer}>
        <img src={"/assets/img/logos/logo-cadena.png"} alt="logo cadena" className={styles.channelLogo}></img>
        <SocialMedia/>
    </div>
  )


  
}
