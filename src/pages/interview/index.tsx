import React from 'react';

import Sidebar from './components/sidebar';

import { ITag, IRequestTag } from './types';

export interface IInterviewProps {
    tags: Array<ITag>
}

const Interview = ({ tags }: IInterviewProps) => {
    return (
        <main>
            <Sidebar tags={tags} />
        </main>
    )
};

export async function getStaticProps() {
    const { data }: IRequestTag = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());

    return {
        props: {
            tags: data.Items,
        }
    }
}



export default Interview;
