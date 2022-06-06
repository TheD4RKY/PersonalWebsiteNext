import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/index.module.css'
import style from '../scss/indexquerry.module.css'
import glitch from '../scss/glitch.module.css'

export default function index() {
  return (
    <>
          <video className={style.bgvideo} autoPlay muted loop >
          <source src={'/videos/glitch1.mp4'} type="video/mp4" />
        </video>
        <div id={glitch.app}>
            <Link href="./about_me"><div className={glitch.glitch} data-text={'ENTER'} >ENTER</div></Link>
        </div>
     
    </>
  );

};
