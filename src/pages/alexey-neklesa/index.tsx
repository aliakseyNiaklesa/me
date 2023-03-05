import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

import Intro from './components/intro';
import './styles.scss';

const AlexeyNekelesaCV = () => {
    return (
        <main className={inter.className}>
            <Intro />
        </main>
    )
}

export default AlexeyNekelesaCV;