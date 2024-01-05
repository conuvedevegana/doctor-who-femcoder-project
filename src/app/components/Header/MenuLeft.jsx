import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

export default function MenuLeft() {
  return (
    <nav className={styles.menuLeft}>
        <Link className={styles.navItem} href="/Conoce" >Conoce a</Link>
        <Link className={styles.navItem} href="/doctores" >Doctores</Link>
        <Link className={styles.navItem} href="/contact" >Contacto</Link>
    </nav>
  )
}


