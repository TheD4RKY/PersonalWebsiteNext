import React from "react";
import Style from "/scss/footer.module.css"

export default function Footer(){
return(
<>
        <section className={Style.footer_banner} id="contact">
            <p className={Style.light2}>FOR MORE INFO &amp; REQUESTS</p>
            <a href="/contact_me" id="ahref" ><div className={Style.button} data-aos="zoom-out">CONTACT ME</div></a>
        </section>
</>
)



}