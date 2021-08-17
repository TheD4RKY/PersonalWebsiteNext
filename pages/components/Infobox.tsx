import React from "react";
import Style from "/styles/Infobox.module.css";

export default function Infobox(){
return(
    <>
    <div className={Style.infoboxes}>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>I'M WORKING WITH</h1>
            <h4>ADOBE</h4>
            <p>Dreamweaver and Photoshop</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>I'M FULFILLING</h1>
            <h4>EXPECTATIONS</h4>
            <p>Either mine or customers</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>I'M SPEAKING IN</h1>
            <h4>PROGRAMMING LANGUAGES</h4>
            <p>HTML, CSS, JS, JQUERRY etc.</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>I'M THINKING VERY</h1>
            <h4>COMPLEX</h4>
            <p>With functionality and systems</p>
        </div>
    </div>


</>
);

}