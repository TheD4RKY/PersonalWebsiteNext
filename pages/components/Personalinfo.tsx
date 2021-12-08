import react from "react";
import Image from 'next/image';
import Style from "/scss/personalinfo.module.css"
export default function Personalinfo(){
return(
<>
        <footer className={Style.footer} data-aos="fade-up" data-aos-duration="6000">
            <article className={Style.footer_column}>
                <h3 className={Style.texth3}>ABOUT ME</h3>
                <Image src="images/about_me.jpeg" className={Style.cards} data-aos="zoom-out" data-aos-delay="300" />
                <p className={Style.textp}> My name is Dennis Kaluzik, I'm 18 years old front-end developer and web designer. Right now I'm studying IT on Vocational high school Klobouky u Brna. I like either indoor and outdoor activites, listening to music, cooking, building computers, playing games and of course most importantly web development. </p>
            </article>
            <article className={Style.footer_column}>
                <h3 className={Style.texth3}>ABOUT MY WORK</h3>
                <Image src="images/about_work.png" className={Style.cards} data-aos="zoom-out" data-aos-delay="300" />
                <p className={Style.textp}>I'm really passionate about my work even though I've been doing it for something around 2 years by now. I'm more likely still a Intermediate in my front-end development but the one thing I can say for sure is I'm able to learn new things in short periods of time.</p>
            </article>
        </footer>




</>
)


    
}