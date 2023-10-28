import classNames from 'classnames';
import React from 'react'
import { UseFormRegister } from 'react-hook-form';
import { COMPLEXITY } from '../model/constants';

interface IProps {
    register: UseFormRegister<any>,
    value: number;
}

export const ComplexityRadioButtons = ({ register, value }: IProps) => {
    const name = 'complexity';

    return (
        <section className="mb-3 mt-3 flex overflow-hidden rounded-md shadow-sm" role="group">
            <label className={classNames(
                'text-center cursor-pointer grow hover:bg-green-100 text-sm p-2', {
                'bg-green-100': value == COMPLEXITY.JUNIOR
            })}>
                <span>Junior</span>
                <input
                    className="hidden"
                    type="radio"
                    value={COMPLEXITY.JUNIOR}
                    id="junior"
                    {...register(name)}
                />
            </label>

            <label className={classNames(
                'text-center cursor-pointer grow hover:bg-amber-100 text-sm p-2', {
                'bg-amber-100': value == COMPLEXITY.MIDDLE
            })}>
                <span>Middle</span>
                <input
                    className="hidden"
                    type="radio"
                    value={COMPLEXITY.MIDDLE}
                    id="middle"
                    {...register(name)}
                />
            </label>

            <label className={classNames(
                'text-center cursor-pointer grow hover:bg-cyan-100 text-sm p-2', {
                'bg-cyan-100': value == COMPLEXITY.SENIOR
            })}>
                <span>Senior</span>
                <input
                    className="hidden"
                    type="radio"
                    value={COMPLEXITY.SENIOR}
                    id="senior"
                    {...register(name)}
                />
            </label>
        </section>
    );
};
