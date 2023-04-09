import React from 'react';

import styles from './styles.module.scss';

const Contacts = () => {

    return (
        <section className={styles.contacts}>
            <span className={styles.title}>Contact me</span>
            <span className={styles.email}>alexsanat@gmail.com</span>
            <footer>
                <ul>
                    <li>
                        <div>Alex Neklesa,</div>
                        <div>Front-end developer</div>
                    </li>
                    <li>Have a great day. 😘</li>
                    <li>Design Alina Neklesa</li>
                </ul>
            </footer>
        </section>
    )
};

export default Contacts;
