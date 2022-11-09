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
                    <h3 className={Style.timeline__title}>I was born here</h3>
                   
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2016</h2>
                <div className={Style.timeline__item} data-aos="fade-up">
                    <h3 className={Style.timeline__title}>First programming language experience ever</h3>
                    <p className={Style.timeline__blurb}>Editing minecraft mods in Java</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2018</h2>
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Started High School</h3>
                    <p className={Style.timeline__blurb}>Vocational High School, Klobouky u Brna</p>
                </div>
                <div className={Style.timeline__item} data-aos="fade-up">
                    <h3 className={Style.timeline__title}>Introduction to my first languages</h3>
                    <p className={Style.timeline__blurb}>C++, Usage on arduino</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2019</h2>
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Created first HTML webpage</h3>
                    <p className={Style.timeline__blurb}>good ol times</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2021</h2>
                <div className={Style.timeline__item} data-aos="fade-up">
                    <h3 className={Style.timeline__title}>Started learning React/Next</h3>
                    <p className={Style.timeline__blurb}>thanks to my friends that recommended me learning this</p>
                </div>
                
              
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Started building this personal site</h3>
                    <p className={Style.timeline__blurb}>Which was delayed due to school</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>2022</h2>
                 <div className={Style.timeline__item} data-aos="fade-up">
                    <h3 className={Style.timeline__title}>First contract</h3>
                     <p className={Style.timeline__blurb}>Making e-shop for my friend from elementary school</p>
                </div>
                <div className={Style.timeline__item} data-aos="fade-up">
                    <h3 className={Style.timeline__title}>Got my drivers licence</h3>
                    <p className={Style.timeline__blurb}>Group b.</p>
                </div>
                <div className={Style.timeline__item} data-aos="fade-up">
                    <h3 className={Style.timeline__title}>Graduated high school</h3>
                    <p className={Style.timeline__blurb}>With high school diploma</p>
                </div>
                <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Worked at Synapse/5</h3>
                        <p className={Style.timeline__blurb}>From 13.7 to 27.9 as Fullstack Web Dev</p>
                </div>
                    <div className={Style.timeline__item} data-aos="fade-right">
                    <h3 className={Style.timeline__title}>Working at Bohemia Interactive</h3>
                        <p className={Style.timeline__blurb}>From 3.10 to current as QA Tester</p>
                </div>
                <h2 className={Style["timeline__item"] + " " + Style["timeline__item--year"]}>THE FUTURE IS NOW</h2>
            </div>
        </div>

</>
)




}
