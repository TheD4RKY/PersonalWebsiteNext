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
                <link href="http://externalcdn.com/respond-proxy.html" id="respond-proxy" rel="respond-proxy" />
            </Head>
            <Navbar />
            <Heroheader />
            <Skillbar />
            <Infobox/>
</>
        )
}