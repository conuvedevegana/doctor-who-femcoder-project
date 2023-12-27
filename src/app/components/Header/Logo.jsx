import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoHeader}>
      <Image
        src="/img/logos/logo.png"
        alt="Home"
        width={190.92}
        height={195.62}
      />
    </Link>
  )
}
