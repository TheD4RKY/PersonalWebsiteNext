import React from 'react'

export default function Navbar({}){
    return(
<header id="navbar">
    <a href="./Mainpage.html">
        <img src="images/logo.png" alt="10" height="50" width="60" /></a>

    <img src="../images/menu_icon.png" className="padding2" alt="10" height="50" width="50" />
    <nav className="colorli" >
        <ul className="colorli">
            <li><a href="./index">HOME</a></li>
            <li><a href="./about_me">ABOUT</a></li>
            <li><a href="./contact_me">CONTACT</a></li>
            <li><a href="i dont have portfolio yet">PORTFOLIO</a></li>
        </ul>
    </nav>
</header>
)
}