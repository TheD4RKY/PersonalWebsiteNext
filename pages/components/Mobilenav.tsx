import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "/scss/mobilenav.module.css";
import {IoIosList} from 'react-icons/io';
    
/*function hideshow() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/


export default function Mobilenav(){
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    
    return(
<div style={{backgroundColor: "black"}}>
            <div style={{ backgroundColor: "black" }} className={styles.butt}><button onClick={handleClick}> <IoIosList/> </button></div>
           
            <div className={active ? styles.menu : 'hidden' } >
                    
                    <ul className={styles.nav}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about_me">About</Link></li>
                        <li><Link href="#">Portfolio</Link></li>
                        <li><Link href="#">Projects</Link></li>
                        <li><Link href="/contact_me">Contact</Link></li>
                        <li style={{color: "white"}}><Link href="#"><IoIosList /></Link></li>   
                    </ul>
                   
             
            </div>


</div>
    )
}

