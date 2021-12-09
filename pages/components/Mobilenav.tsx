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
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                <h2 className={styles.title}>menu</h2>
                </div>
            


</>
    )
}
