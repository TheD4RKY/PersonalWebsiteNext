import React from "react";
import Style from "/scss/skillbar.module.css";
import Tletter from "/styles/transletter.module.css";
export default function Skillbar(){
  return (  
    <>
<div className={Style.container2}>
    <h1 className={Style.textskillmobile}>Skills i posses and comparison of their level</h1>
              <div className={Style["bar"] + " " + Style["learning2"]} data-skill="SQL"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["basic"]} data-skill="C++"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["intermediate"]} data-skill="JSON"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["intermediate2"]} data-skill="PHP"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["intermediate3"]} data-skill="React/NEXTjs"></div>
              <div className={Style["bar"] + " " + Style["front"] + " " + Style["advanced"]} data-skill="TailwindCSS"></div>
              <div className={Style["bar"] + " " + Style["front"] + " " + Style["advanced2"]} data-skill="JS/TS"></div>
        <div className={Style["bar"] + " " + Style["front"] + " " + Style["expert"]} data-skill="SASS/CSS3"></div>
</div>
</>
)
}
