import React from "react"
import Style from '/styles/heroheader.module.css'
export default function Heroheader() {
    return (
            <div className={Style.heroimage}>
            <section className={Style.hero}>
                <h2 className={Style.hero_header}>Contact me <span className={Style.light}>or Fill the form</span></h2>
                <p className={Style.tagline}>Dennis Kalužík</p>
            </section>
        </div>   
    );
}