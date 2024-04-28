import React, { useState } from 'react';

import { Rubik } from 'next/font/google';

import { IQuestion } from '@/widgets/questions/types';
import Sidebar from '@/widgets/sidebar';
import Questions from '@/widgets/questions';

import './styles.scss';
import { COMPLEXITY, ITag } from '@/entities';

const fonts = Rubik({ subsets: ['latin'] });
interface Props {
    questions: Array<IQuestion>,
    tags: Array<ITag>,
    currentTagUuid: string,
}

const InterviewWithQuestions = ({ questions, tags, currentTagUuid }: Props) => {
    return (
        <main className={`${fonts.className}`}>

            <footer>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Back
                </button>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Next
                </button>
            </footer>
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
            currentTagUuid: params?.tagUuid,
        }
    }
}

export default InterviewWithQuestions;
