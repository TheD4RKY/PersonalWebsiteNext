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
                
                    <p className={Style.textp}> {"lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."}</p>
               
            </article>
            
            <article className={Style.footer_column}>
                <h3 className={Style.texth3}>ABOUT MY WORK</h3>
                <Image src="/images/about_work.png" alt="second picture" className={Style.cards} data-aos="zoom-out" data-aos-delay="300" width="330px;"
	height="300px;" />
                
                    <p className={Style.textp}>{"lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."}</p>
                
            </article>
            
        </footer>




</>
)


    
}
