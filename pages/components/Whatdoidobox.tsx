import React from "react";
import Style from "/scss/infobox.module.css";

export default function Infobox(){
return(
    <>
    <div className={Style.infoboxes}>
        <div className={Style.littleinfobox}>
                <h1 className={Style.stats}>
                    <div>
                    {"SOFTWARE I USE"}
</div>
</h1>
            <h4>For coding and Photoediting</h4>
            <p>VSCode and Photoshop</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>IM FULFILLING</h1>
            <h4>Expectations</h4>
            <p>Either mine or customers</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>MY SPECIALIZATION</h1>
            <h4>Programing languages</h4>
            <p>Javascript, Typescript, TailwindCSS etc..</p>
        </div>
        <div className={Style.littleinfobox}>
            <h1 className={Style.stats}>{"IM TRYING TO"}</h1>
            <h4>Constantly learn more</h4>
            <p>And expand my potencial</p>
        </div>
    </div>


</>
);

}