import react from "react";
import Image from 'next/image';
import Style from "/scss/personalinfo.module.css"
export default function Personalinfo(){
return(
<>
        <footer className={Style.footer} data-aos="fade-up" data-aos-duration="6000">
            <article className={Style.footer_column}>
                <h3 className={Style.texth3}>ABOUT ME</h3>
                <Image src="/images/about_me.jpeg" alt="first picture" className={Style.cards} data-aos="zoom-out" data-aos-delay="300" width="330px;"
                    height="300px;" />
                
                <p className={Style.textp}> {"I'm 19 years old. I graduated High School in IT field on Vocational "}
                    {"High School Klobouky u Brna. I love to code, learn about things, drive in cars, spend time with friends, exploring nature and play video games."}
                </p><br /><p className={Style.textp}>
                {"I think I'm fast learner in general even if I have to learn something that"}
                {"could be quite boring. Maybe I'm not perfect but who is? What i find"}
                {"perfect about me is that I'll do my best to learn things I don't already know"}
                {"and grow my potencial."}
                </p>
            </article>
            
            <article className={Style.footer_column}>
                <h3 className={Style.texth3}>ABOUT MY WORK</h3>
                <Image src="/images/about_work.png" alt="second picture" className={Style.cards} data-aos="zoom-out" data-aos-delay="300" width="330px;"
	height="300px;" />
                
                <p className={Style.textp}>{"Right now I'm doing smaller projects in NextJS framework built on React "}
                    {"with Typescript superset (For example coding my personal website and E-shop as a contract which are published on my GitHub page"}</p>
                    <br /><p className={Style.textp}>{"Right now I'm in search of stable job where i can improve my skills, get to now someone new, make living and idealy work from home so i have more time for gym (i really need it) or for myself"}</p>
            </article>
            
        </footer>




</>
)


    
}
