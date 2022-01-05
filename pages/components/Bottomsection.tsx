import React from "react";
import Style from "/scss/footer.module.css";
import Link from 'next/link';
export default function Footer(){
return(
<>
        <section className={Style.footer_banner} id="contact">
            <p className={Style.light2}>FOR MORE INFO &amp; REQUESTS</p>
            <Link href="/contact_me"><div className={Style.button} data-aos="zoom-out">CONTACT ME</div></Link>
        </section>
</>
)



}
