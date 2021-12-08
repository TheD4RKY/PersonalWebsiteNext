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
            <h4>Reliable tools</h4>
            <p>VSCode and Photoshop</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>IM FULFILLING</h1>
            <h4>Expectations</h4>
            <p>Either mine or customers</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>IM SPEAKING BY</h1>
            <h4>Programing languages</h4>
            <p>Javascript, C++, PHP etc..</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>Im trying to</h1>
            <h4>Think</h4>
            <p>on a technical level</p>
        </div>
    </div>


</>
);

}