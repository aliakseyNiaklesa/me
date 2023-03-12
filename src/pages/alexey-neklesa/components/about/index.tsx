import React from 'react';

import styles from './styles.module.scss';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.title}>About me</div>
            <div className={styles.card}>
                <img src="/about.png"/>
                <div>
                    I'm glad to introduce myself. My favorite hobbies are:
                    boardgames, sculpting and embroidery. I like to read books
                    and learn new stuff. Also dreams about privet house and a second dog.
                </div>
            </div>
        </section>
    )
}

export default About;