import React from 'react';
import { IQuestion } from './types';
import { ActiveQuestion, QuestionCard } from '@/entities/question';

interface Props {
    questions: Array<IQuestion>
}

const Questions = ({ questions = [] }: Props) => {
    const activeQuestion = questions[0];

    return (
        <section className="row-span-1 col-span-4 bg-slate-100 rounded-lg p-4">
            {activeQuestion  && <ActiveQuestion question={activeQuestion} />}
            <div className="flex flex-wrap gap-3">
                {questions.map((question) => (
                    <QuestionCard key={question.uuid} question={question} />
                ))}
            </div>
        </section>
    )
};

export default Questions;
