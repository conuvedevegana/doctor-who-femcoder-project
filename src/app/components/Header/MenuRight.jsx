import React from 'react'
import Search from './Search'
import SocialMedia from '../SocialMedia/socialMedia'
import styles from './Header.module.css';

export default function MenuRight() {
  return (
    <nav className={styles.menuRight}>
        <Search/>
        <SocialMedia/>
    </nav>
  )
}
