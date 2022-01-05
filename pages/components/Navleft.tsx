import React, { useState } from 'react';
import styles from '/scss/navbarsocial.module.css';



export default function Navsocial() {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.title}>BLOG</div>
                <ul className={styles.nav}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
</>
);
}