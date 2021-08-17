import React from "react";
import Style from "/styles/skillbar.module.css";

export default function Skillbar(){
  return (  
    <>
<div className={Style.container2}>
    <h1 className={Style.textskillmobile}>My skill level</h1>
              <div className={Style["bar"] + " " + Style["learning"]} data-skill="JQUERY"></div>
              <div className={Style["bar"] + " " + Style["learning2"]} data-skill="TYPESCRIPT"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["basic"]} data-skill="C++"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["intermediate"]} data-skill="React"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["intermediate"]} data-skill="SCSS"></div>
              <div className={Style["bar"] + " " + Style["back"] + " " + Style["intermediate"]} data-skill="JAVASCRIPT"></div>
              <div className={Style["bar"] + " " + Style["front"] + " " + Style["advanced"]} data-skill="NEXT js"></div>
              <div className={Style["bar"] + " " + Style["front"] + " " + Style["advanced"]} data-skill="CSS3"></div>
              <div className={Style["bar"] + " " + Style["front"] + " " + Style["expert"]} data-skill="HTML5"></div>
</div>
</>
)
}