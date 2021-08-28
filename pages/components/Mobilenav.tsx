import React from "react";
import styles from "/scss/mobilenav.module.css";
import {IoIosList} from 'react-icons/io'

export default function Mobilenav(){

    return(
<>

                <div className={styles.menu}>
                    
                    <ul className={styles.nav}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                <div className={styles.title}>menu</div>
                </div>
            


</>
    )
}