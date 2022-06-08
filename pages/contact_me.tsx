import React from 'react'
import Heroheader from './components/contactme/Topsectioncontact';
import Mobilenav from './components/Mobilenav';
import Navbar from './components/Navright';
import Navsocial from './components/Navleft';
import Fromcover from './components/contactme/formcover';
import Grid from "/scss/flextopheader.module.css";
import Copyright from './components/Copyright';
export default function contact() {
    return (
        <div className="block min-h-full relative h-max xl:flex xl:flex-col xl:h-screen">
        <Navbar />
        <Navsocial />
        
        <Heroheader/>
       
        <Fromcover />
   
            <div className="h-10"></div>
            <Copyright />
        </div>
    )
}