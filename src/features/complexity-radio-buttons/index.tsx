import React from 'react'
import Input from '@/shared/input';
import { UseFormRegister } from 'react-hook-form';

import styles from './styles.module.scss';

interface IProps {
    register: UseFormRegister<any>,
}

const ComplexityRadioButtons = ({ register }: IProps) => {
    const name = 'complexity';

    return (
        <section className={styles.filter}>
            <Input
                id="junior"
                formProps={register(name)}
                type="radio"
                value="1"
            />
            <label htmlFor="junior">Junior</label>
            <Input
                id="middle"
                formProps={register(name)}
                type="radio"
                value="2"
            />
            <label htmlFor="middle">Middle</label>
            <Input
                id="senior"
                formProps={register(name)}
                type="radio"
                value="3"
            />
            <label htmlFor="senior">Senior</label>
        </section>
    );
};

export default ComplexityRadioButtons;