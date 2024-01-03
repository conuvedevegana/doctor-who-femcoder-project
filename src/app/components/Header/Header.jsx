import React from 'react';
import styles from './Header.module.css';
import MenuLeft from './MenuLeft';
import Logo from './Logo';
import MenuRight from './MenuRight';



export default function Header() {
  return (
    <header className={styles.header}>
        <MenuLeft/>
        <Logo/>
        <MenuRight/>
    </header>
  )
}


