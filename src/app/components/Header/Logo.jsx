import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoHeader}>
      <Image
        src="/assets/img/logos/logo.png"
        alt="Home"
        width={100}
        height={100}
      />
    </Link>
  )
}
