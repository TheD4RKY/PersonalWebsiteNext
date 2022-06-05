import React from 'react'
import Heroheader from './components/contactme/Topsectioncontact';
import Mobilenav from './components/Mobilenav';
import Navbar from './components/Navright';
import Navsocial from './components/Navleft';
import Fromcover from './components/contactme/formcover';
import Grid from "/scss/flextopheader.module.css";
export default function contact() {
    return (
        <>
        <Navbar />
        <Navsocial />
        
        <Heroheader/>
        <div className={Grid.wrapper}>
        <Fromcover />
        </div>
        </>
    )
}