import React from 'react';

import styles from './styles.module.scss';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.title}>About me</div>
            <div className={styles.card}>
                <img
                    loading="lazy"
                    src="/about.png"
                    decoding="async"
                    alt="Picture of Alexey and Odi"
                />
                <div>
                    <p>I&apos;m glad to introduce myself.</p>
                    <p>I&apos;m Frontend Dev who is moving toward to Fullstack</p>
                    <p>My favorite hobbies are: boardgames, sculpting and embroidery.</p>
                    I like to read books
                    and learn new stuff. Also dreams about privet house and a second dog.
                    <p>I&apos;m keen of tech stuff, EDC and PC games.</p>
                    <p>Addicted to build perfect work space</p>
                </div>
            </div>
        </section>
    )
}

export default About;