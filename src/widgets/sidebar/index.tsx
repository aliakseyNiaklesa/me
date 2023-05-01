import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import TagLink from '@/entities/tag-link';
import Input from '@/shared/input';
import ComplexityRadioButtons from '@/features/complexity-radio-buttons';

import { IForm, ISidebarProps } from './types';
import styles from './styles.module.scss';

const Sidebar = ({ tags }: ISidebarProps) => {
    const { register, handleSubmit } = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        console.log(data);
    }

    return <aside className={styles.sidebar}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.search}>
                <Image
                    src="/icons/search.svg"
                    width="20"
                    height="20"
                    alt="Search icon"
                />
                <Input formProps={register('search')} />
            </div>
            
            <ComplexityRadioButtons register={register}/>
        </form>
        <ul>
           {tags.map((tag) => (
               <li key={tag.id}>
                   <TagLink tag={tag}/>
               </li>
           ))}
        </ul>
    </aside>
}

export default Sidebar;