import React from 'react'
import Head from 'next/head';
import Navbar from './components/Nav';
import Heroheader from './components/Heroheader';
import Skillbar from './components/Skillbar';
import Infobox from './components/Infobox';
import Mobilenav from './components/Mobilenav';
import Navsocial from './components/Navsocial';
import Middlesection from './components/Middlesection';

export default function Nav({ }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Mobilenav />
            <Navsocial />
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox />
            <Middlesection />
            
</>
        )
}