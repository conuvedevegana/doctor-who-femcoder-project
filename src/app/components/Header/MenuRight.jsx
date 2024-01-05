import React from 'react'

import SocialMedia from '../SocialMedia/socialMedia'
import styles from './Header.module.css';
import Search from '../Search/Search';

export default function MenuRight() {
  return (
    <nav className={styles.menuRight}>
        <Search />
        <SocialMedia/>
    </nav>
  )
}
