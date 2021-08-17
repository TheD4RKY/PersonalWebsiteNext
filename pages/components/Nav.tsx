import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import letter from '../../styles/transletter.module.css'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import style from '../../scss/navbar.module.css';
import Head from 'next/head';


export default function Navbar() {
    return (
        <>
            <div className={style.menu}>
                <div className={style.title}>MENU</div>
                <ul className={style.nav}>
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