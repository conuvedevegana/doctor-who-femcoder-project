import React from 'react'
import styles from './socialMedia.module.css';

export default function SocialMedia() {
    return (
        <ul className={styles.socialMedia}>
            <li><a href="https://www.facebook.com"><img src={"/assets/img/icons/facebook.svg"} alt="logo Facebook" /></a></li>
            <li><a href='https://twitter.com/'><img src={"/assets/img/icons/simple-icons_x.svg"} alt="logo Twitter" /></a></li>
            <li><a href='https://instagram.com/'><img src={"/assets/img/icons/mdi_instagram.svg"} alt="logo Instagram" /></a></li>
            <li><a href='https://tiktok.com/'><img src={"/assets/img/icons/ic_baseline-tiktok.svg"} alt="logo TikTok" /></a></li>
        </ul>
    )
}
