import React from "react";
import Style from "/scss/timeline.module.css";
export default function Timeline(){
return(
<>
        <div className={Style.infoboxestime}>
            <h2 className={Style.h2st} >My lifeline</h2>
            <div className={Style.timeline}>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2002</h2>
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>The Legend Was Born</h3>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2016</h2>
                <div className={Style.timeline__item} data-aos="fade-left">
                    <h3 className={Style.timeline__title}>Modding</h3>
                    <p className={Style.timeline__blurb}>Tweaking mods for my minecraft in JAVA</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2018</h2>
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Started High School</h3>
                    <p className={Style.timeline__blurb}>With focus on IT</p>
                </div>
                <div className={Style.timeline__item} data-aos="fade-left">
                    <h3 className={Style.timeline__title}>Created first little projects</h3>
                    <p className={Style.timeline__blurb}>Simple Discord bot in Python, little arduino projects in C++, introduced myself to front-end / back-end and linux</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2019</h2>
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Created first HTML webpage</h3>
                    <p className={Style.timeline__blurb}>without template</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2021</h2>
                <div className={Style.timeline__item} data-aos="fade-left">
                    <h3 className={Style.timeline__title}>Became freelancer</h3>
                </div>
                <div className={Style.timeline__item} data-aos="fade-left">
                    <h3 className={Style.timeline__title}>Building webapp for my school</h3>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>NOW</h2>
            </div>
        </div>

</>
)




}