import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

import Jobs from './components/jobs';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';

import './styles.scss';

const AlexeyNekelesaCV = () => {
    return (
        <main className={inter.className}>
            <Head>
                <title>Aleksey Neklesa</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
            </Head>
            <Intro />
            <Experience />
            <Jobs />
            <About />
        </main>
    )
}

export default AlexeyNekelesaCV;