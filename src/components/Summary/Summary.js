import React from 'react';

import styles from './styles.module.css';

export const Summary = () => {

    return (
        <section className={styles.summary}>
            <label>Summary</label>
            <ul>
                <li>
                    Successfully builded projects with all
                    stages and phases starting with idea
                    inception, mockup design, setting up project
                    environment, implementing CI and working with
                    user/client feedbacks
                </li>
                <li>
                    Proactive Software Engineer with over 6 years of
                    experience in design and development of web
                    applications
                </li>
                <li>
                    2 years of leading Chrome Extension project
                </li>
                <li>
                    Worked as a member of small and big teams
                    (Over 60 international comrades)
                </li>
                <li>
                    Experienced with responsibility for a
                    project with over 3000 active users per day
                </li>
            </ul>
        </section>
    )
}
