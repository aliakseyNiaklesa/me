import React from 'react';

import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li>Alexey Neklesa</li>
                <li>Currently front-end developer at Spiral Scout</li>
                <li>
                    <span>Based in Poznań,</span>
                    <span>Poland</span>
                </li>
                <li>
                    <a href="#">Download resume</a>
                    <a
                        href="https://www.linkedin.com/in/alexeyneklesa/"
                        target="_blank"
                    >Linkedn</a>
                </li>
            </ul>
        </header>
    )
}