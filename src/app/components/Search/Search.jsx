import React from 'react';
import Link from 'next/link';
import styles from './search.module.css';

export default function Search() {
  return (
    <Link className={styles.search} href="#">
      <img
          src="/assets/img/icons/material-symbols-light_search.svg"
          alt="Search"
          width={24}
          height={24}
        />
      Buscar
    </Link>
  )
}
