import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/index.module.css'
import style from '../scss/indexquerry.module.css'
import glitch from '../scss/glitch.module.css'
import Script from 'next/script'

export default function index() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
          <video className={style.bgvideo} autoPlay muted loop >
          <source src={'/videos/glitch1.mp4'} type="video/mp4" />
        </video>
        <div id={glitch.app}>
            <a href="./about_me"><div className={glitch.glitch} data-text={'ENTER'} >ENTER</div></a>
        </div>
     
    </>
  );

};