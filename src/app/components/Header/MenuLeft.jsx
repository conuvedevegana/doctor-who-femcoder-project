import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

export default function MenuLeft() {
  return (
    <nav className={styles.menuLeft}>
        <Link className={styles.navItem} href="../../doctress/page.jsx" >Conoce a</Link>
        <Link className={styles.navItem} href="" >Doctores</Link>
        <Link className={styles.navItem} href="" >Contacto</Link>
    </nav>
  )
}


