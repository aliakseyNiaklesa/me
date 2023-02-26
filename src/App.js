import React from 'react';
import {
    Header,
    Title,
    Summary,
    Companies,
    AboutMe,
} from './components';

import './styles.css';

export const App = () => {
    return (
        <main>
            <section>
                {/* <Header />
                <Title />
                <Summary />
                <Companies /> */}
                <AboutMe />
            </section>
        </main>
    )
};
