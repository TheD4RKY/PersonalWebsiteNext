import React, { useState } from 'react';
import styles from '/scss/navbarsocial.module.css';
import Link from 'next/link';



export default function Navsocial() {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.title}>BLOG</div>
                <ul className={styles.nav}>
                    <li><Link href="#">Comming later</Link></li>
                </ul>
            </div>
</>
);
}