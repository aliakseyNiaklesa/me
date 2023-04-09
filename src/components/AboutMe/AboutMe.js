import React from 'react';

import me from 'assets/me.png';

import styles from './styles.module.css';

export const AboutMe = () => {
    return (
        <section className={styles['about-me']}>
            <span>
                About Me
            </span>
            <span>
                <img src={me}/>
                <p>
                    I'm glad to introduce myself. My favorite hobbies are:
                    boardgames, sculpting and embroidery. I like to read books
                    and learn new stuff. Also dreams about privet house and a second dog.
                </p>
            </span>
        </section>
    );
};
