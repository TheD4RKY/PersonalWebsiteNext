import React, { useState } from 'react'
import Styles from '../../css/navbar/navbardesktop.module.css'
import Transletter from '../../css/cssanimation/transletter.module.css' 
import Link from 'next/link';


function Navbar({}){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter = () => {
if(window.innerWidth < 960){
        setDropdown(false);
} else {
        setDropdown(true);
}

    }
    return(
        <>
<header id={Styles.navbar}>
    <nav className={Styles.colorli} >
    <a href='/' className={Styles.navbarlogo} onClick={closeMobileMenu}>
    <img src="/images/logo.png" alt="10" className={Styles.padding} />
</a>

    <a href='' onClick={handleClick}>
    <img src="/images/menuicon.png" className={Styles.padding2} alt="10" height="50" width="50" />
    </a>

    

        <a href='/' className={Styles.navbarlogo} onClick={closeMobileMenu} />
        <ul className={Styles.colorli} id={Styles.myLinks}>
            <li><a href="./index">HOME</a></li>
            <li><a href="./about_me">ABOUT</a></li>
            <li><a href="./contact_me">CONTACT</a></li>
            <li><a href="i dont have portfolio yet">PORTFOLIO</a></li>
        </ul>
    </nav>
</header>
</>
)
}

export default Navbar; 