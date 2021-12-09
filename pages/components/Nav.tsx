import React, { useState } from 'react';
import style from '../../scss/navbar.module.css';



export default function Navbar() {
    return (
        <>
            <div className={style.menu}>
                <div className={style.title}>MENU</div>
                <ul className={style.nav}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about_me">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="/contact_me">Contact</a></li>
                </ul>
            </div>
</>
);
}