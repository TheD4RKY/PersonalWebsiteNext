import React from 'react'
import Head from 'next/head';
import Navbar from './components/Nav';
import Heroheader from './components/Heroheader';
import Skillbar from './components/Skillbar';
import Infobox from './components/Infobox';

export default function Nav({ }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox/>
</>
        )
}