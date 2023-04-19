import React from 'react';
import { IQuestion } from './types';

interface Props {
    questions: Array<IQuestion>
}

const Questions = ({ questions }: Props) => {
    return (
        <section>
            {questions.map((question) => (
                <div key={question.uuid}>{question.title}</div>
            ))}
        </section>
    )
};

export default Questions;
