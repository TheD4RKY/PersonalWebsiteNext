import React from 'react'
import Navbar from './components/Nav';
import Heroheader from './components/Heroheader';
import Skillbar from './components/Skillbar';
import Infobox from './components/Infobox';

export default function Nav({ }) {
    return (
        <>
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox/>
</>
        )
}