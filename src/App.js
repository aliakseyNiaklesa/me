import React from 'react';
import { Header, Title, Summary } from './components';

import './styles.css';

export const App = () => {
    return (
        <main>
            <section>
                <Header />
                <Title />
                <Summary />
            </section>
        </main>
    )
};
