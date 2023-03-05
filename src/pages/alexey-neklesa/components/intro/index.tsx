import React from 'react';

import styles from './styles.module.scss';

const Intro = () => {

    return (
        <section className={styles.intro}>
            <span className={styles.name}>Alexey Neklesa</span>
            <span className={styles.title}>Currently front-end developer at Spiral Scout</span>
            <span className={styles.city}>Based in Poznań, Poland</span>
            <span className={styles.resume}>
                <a href="#">Download resume</a>
                <a href="https://www.linkedin.com/in/alexeyneklesa/">Linkedn</a>
            </span>
            <span className={styles.bigTitle}>
                <div>Front-end</div>
                <div>developer with 6+</div>
                <div>years of experience</div>
            </span>
        </section>
    );
}

export default Intro;