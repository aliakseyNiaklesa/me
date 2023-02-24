import React from 'react';
import {
    Header,
    Title,
    Summary,
    Companies,
} from './components';

import './styles.css';

export const App = () => {
    return (
        <main>
            <section>
                <Header />
                <Title />
                <Summary />
                <Companies />
            </section>
        </main>
    )
};
