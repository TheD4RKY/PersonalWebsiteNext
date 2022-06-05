import React from "react"
import Style from '/styles/heroheader.module.css'
export default function Heroheader(){
    return(
<div className={Style.heroimage}>
    <section className={Style.hero}>
        <h2 className={Style.hero_header}>DENNIS <span className={Style.light}>KALUZIK</span></h2>
        <p className={Style.tagline}>FULL-STACK JUNIOR DEVELOPER</p>
    </section>
    
</div>
    );
}