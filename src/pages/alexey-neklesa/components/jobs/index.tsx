import React from 'react';

import styles from './styles.module.scss';

const Jobs = () => {

    return (
        <section className={styles.jobs}>
            <span className={styles.title}>Companies and projects I have worked for</span>
            <span className={styles.andersen}>Andersen</span>
            <span className={styles.consensus}>Consensus</span>
            <span className={styles.sberbank}>Sberbank</span>
            <span className={styles.cian}>Cian</span>
        </section>
    );
}

export default Jobs;
