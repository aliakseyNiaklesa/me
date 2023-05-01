import React from 'react';

import { Rubik } from 'next/font/google';

import { IQuestion } from '@/widgets/questions/types';
import Sidebar from '@/widgets/sidebar';
import Questions from '@/widgets/questions';
import { ITag } from '@/entities/tag-link/types';

import './styles.scss';

const fonts = Rubik({ subsets: ['latin'] });
interface Props {
    questions: Array<IQuestion>,
    tags: Array<ITag>
}

const InterviewWithQuestions = ({ questions, tags }: Props) => {
    console.log(questions);
    return (
        <main className={fonts.className}>
            <Sidebar tags={tags} />
            <Questions questions={questions} />
        </main>
    );
}

export async function getStaticPaths() {
    const { data } = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());

    return {
        paths: data.Items.map((tag: ITag) => ({
            params: { tagUuid: tag.id }
        })),
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }: any) {
    const tagUuid = params?.tagUuid;

    const questionResponse = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/questions?tagUuid=' + tagUuid)
        .then((response) => response.json());

    const { data } = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());
    
    return {
        props: {
            questions: questionResponse.items,
            tags: data.Items,
        }
    }
}

export default InterviewWithQuestions;
