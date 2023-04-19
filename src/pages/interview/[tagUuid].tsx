import React from 'react';
import Questions from './components/questions';
import Sidebar from './components/sidebar';
import { IQuestion, IRequestTag, ITag } from './types';

interface Props {
    questions: Array<IQuestion>,
    tags: Array<ITag>
}

const InterviewWithQuestions = ({ questions, tags }: Props) => {
    console.log(questions);
    return (
        <main>
            <Sidebar tags={tags} />
            <Questions questions={questions} />
        </main>
    );
}

export async function getStaticPaths() {
    const { data }: IRequestTag = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());

    return {
        paths: data.Items.map((tag) => ({
            params: { tagUuid: tag.id }
        })),
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }: any) {
    const tagUuid = params?.tagUuid;

    const questionResponse = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/questions?tagUuid=' + tagUuid)
        .then((response) => response.json());

    const { data }: IRequestTag = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());
    
    return {
        props: {
            questions: questionResponse.items,
            tags: data.Items,
        }
    }
}

export default InterviewWithQuestions;
