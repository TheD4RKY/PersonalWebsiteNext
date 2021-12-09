import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from './components/Nav';
import Heroheader from './components/Heroheader';
import Skillbar from './components/Skillbar';
import Infobox from './components/Infobox';
import Mobilenav from './components/Mobilenav';
import Navsocial from './components/Navsocial';
import Middlesection from './components/Middlesection';
import Midbannersection from './components/Midbannersection';
import Personalinfo from './components/Personalinfo';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
export default function Nav({ }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Mobilenav />
            <Navsocial />
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox />
          {/*  <Middlesection />
            <Midbannersection />
            <Personalinfo />
            <Timeline />
            <Footer />
            <Copyright />  */}
</>
        )
}
