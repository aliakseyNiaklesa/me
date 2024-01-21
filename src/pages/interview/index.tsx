import React from 'react';

import { Rubik } from 'next/font/google';
import Sidebar from '@/widgets/sidebar';
import { ITag } from '@/entities';

import './styles.scss';

const fonts = Rubik({ subsets: ['latin'] });
export interface IInterviewProps {
    tags: Array<ITag>
}

const Interview = ({ tags }: IInterviewProps) => {
    return (
        <main className={`${fonts.className} grid grid-cols-5`} >
            <Sidebar currentTagUuid="" tags={tags} />
            <div></div>
        </main>
    )
};

export async function getStaticProps() {
    const { data } = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());

    return {
        props: {
            tags: data.Items,
        }
    }
}



export default Interview;
