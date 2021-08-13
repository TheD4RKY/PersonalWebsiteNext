import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Navbar from './components/Navbar';
import styles from '../css/index.module.css'
import style from '../scss/indexquerry.module.css'

export default function index() {
  return (
    <>
    <head>
      <script>var __adobewebfontsappname__="dreamweaver"</script>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    </head>
    <body className={style.body}>
        <video id={style.bgimagevid} poster="../images/cover.jpg" autoPlay muted loop >
          <source src={'/videos/glitch1.mp4'} type="video/mp4" />
      </video>
      <a href="./about_me"><div className={styles.bgtext}>ENTER</div></a>
      </body>
    </>
  );

};
