import "../css/About_Desktop.css";
import "../css/About_Tablet.css";
import "../css/About_MinDesktop.css";
import "../css/About_Mobile.css";

import React from "react";

export default function Navbar(){
return(
<header id="navbar"> 
<a href="./Mainpage.html"><img src="images/logo.png" alt="10" height="50" width="60"></a>
<a href="javascript:void(0);" onclick="dropdown()"><a href="javascript:void(0);" onClick="dropdown()">
<img src="images/menu_icon.png" class="padding2" alt="10" height="50" width="50"></a></a>
<nav class="colorli" >
      <ul class="colorli" id="myLinks">
        <li><a href="./index.html">HOME</a></li>
        <li><a href="./about_me.html">ABOUT</a></li>
        <li><a href="./contact_me.html">CONTACT</a></li>
		<li><a href="i dont have portfolio yet">PORTFOLIO</a></li>
      </ul>
    </nav>
  </header>

);


}