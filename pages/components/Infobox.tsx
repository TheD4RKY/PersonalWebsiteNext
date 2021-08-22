import React from "react";
import Style from "/scss/infobox.module.css";

export default function Infobox(){
return(
    <>
    <div className={Style.infoboxes}>
        <div className={Style.littleinfobox}>
                <h1 className={Style.stats}>
                    <div>
                    {"I'm working with"}
</div>
</h1>
            <h4>ADOBE</h4>
            <p>Dreamweaver and Photoshop</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>IM FULFILLING</h1>
            <h4>EXPECTATIONS</h4>
            <p>Either mine or customers</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>IM SPEAKING IN</h1>
            <h4>PROGRAMMING LANGUAGES</h4>
            <p>HTML, CSS, JS, JQUERRY etc.</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>IM THINKING VERY</h1>
            <h4>COMPLEX</h4>
            <p>With functionality and systems</p>
        </div>
    </div>


</>
);

}