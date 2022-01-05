import React, { useState } from 'react';
import style from '../../scss/navbar.module.css';
import Link from 'next/link';


export default function Navbar() {
    return (
        <>
            <div className={style.menu}>
                <div className={style.title}>MENU</div>
                <ul className={style.nav}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about_me">About</Link></li>
                    <li><Link href="#">Work</Link></li>
                    <li><Link href="#">Resources</Link></li>
                    <li><Link href="/contact_me">Contact</Link></li>
                </ul>
            </div>
</>
);
}
