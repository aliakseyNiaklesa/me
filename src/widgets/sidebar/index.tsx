import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { TagLink } from '@/entities/tag-link';
import ComplexityRadioButtons from '@/features/complexity-radio-buttons';

import { IForm, ISidebarProps } from './types';
import classNames from 'classnames';

const Sidebar = ({ tags, currentTagUuid }: ISidebarProps) => {
    const { register, handleSubmit, watch } = useForm<IForm>({
        defaultValues: {
            complexity: 3,
        }
    });


    const onSubmit = (data: IForm) => {
        console.log(data);
    }

    const { complexity } = watch();

    console.log('currentTagUuid', currentTagUuid);

    return <aside className='col-span-1'>
        <form className="mr-4" onSubmit={handleSubmit(onSubmit)}>
            <div >
                <div className="relative">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        {...register('search')}
                        className="w-full bg-slate-100 pl-3 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>

            <ComplexityRadioButtons register={register} value={complexity} />
        </form>
        <ul>
            {tags.map((tag) => (
                <li key={tag.id} className={classNames(
                    'w-full p-4 rounded-l-lg', {
                    'bg-slate-100': currentTagUuid === tag.id
                })}>
                    <TagLink tag={tag} />
                </li>
            ))}
        </ul>
    </aside>
}

export default Sidebar;