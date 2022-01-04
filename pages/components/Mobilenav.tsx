import React from "react";
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                        <li style={{color: "white"}}><a href="#"><IoIosList /></a></li>   
                    </ul>
                   
             
            </div>


</div>
    )
}

