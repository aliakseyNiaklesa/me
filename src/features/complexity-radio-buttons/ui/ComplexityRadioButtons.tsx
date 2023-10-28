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
                'text-center grow cursor-pointer text-gray-900 bg-white focus:outline-none hover:bg-green-100 focus:ring-4 focus:ring-gray-200 text-sm p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700', {
                'bg-green-100': value == COMPLEXITY.SENIOR
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
                'text-center grow cursor-pointer text-gray-900 bg-white focus:outline-none hover:bg-amber-100 focus:ring-4 focus:ring-gray-200 text-sm p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700', {
                'bg-amber-100': value == COMPLEXITY.SENIOR
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
                'text-center cursor-pointer grow text-gray-900 bg-white focus:outline-none hover:bg-cyan-100 focus:ring-4 focus:ring-gray-200 text-sm p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700', {
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
