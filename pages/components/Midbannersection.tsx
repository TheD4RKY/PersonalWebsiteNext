import React, { Component } from "react";
import Style from "/scss/midbanner.module.css";


export default function Midbannersection(){
    return(
<>
<div className={Style.wrapper}>
            <div className={Style.videocontainer} data-aos="fade-right" data-aos-duration="20000">
                <video autoPlay muted loop className={Style.video}>
                    <source src="./videos/headervideo.mp4" />
                </video>
                <div className={Style.caption}>
                    <h2 className={Style.parallax}>New but reliable</h2>
                    <p className={Style.parallax_description}>Always on the way to your dreams.</p>
                </div>
            </div>
</div>

</>
    )





}