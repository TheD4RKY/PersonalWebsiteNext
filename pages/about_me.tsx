import React from 'react'
import Head from 'next/head';
import Navbar from './components/Nav';
import Heroheader from './components/Heroheader';
import Skillbar from './components/Skillbar';
import Infobox from './components/Infobox';
import Mobilenav from './components/Mobilenav';

export default function Nav({ }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Mobilenav />
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox />
            
</>
        )
}