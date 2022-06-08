import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from './components/Navright';
import Heroheader from './components/Topsectionabout';
import Skillbar from './components/Skillbar';
import Infobox from './components/Whatdoidobox';
import Mobilenav from './components/Mobilenav';
import Navsocial from './components/Navleft';
import Middlesection from './components/Middlesection';
import Midbannersection from './components/Midbannersection';
import Personalinfo from './components/Personalinfo';
import Timeline from './components/Timeline';
import Footer from './components/Bottomsection';
import Copyright from './components/Copyright';
export default function Nav({ }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div style={{width:"100%"}} className="min-h-full relative">
            
            <Navsocial />
            <Mobilenav />
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox />
          <Middlesection />
            <Midbannersection />
            <Personalinfo />
            <Timeline />
            <Footer />
            <div className="h-6"></div>
            <Copyright />
            
</div>
        )
}
