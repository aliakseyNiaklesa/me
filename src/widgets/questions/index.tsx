import React, { useState } from 'react';
import { IQuestion } from './types';
import { ActiveQuestion, QuestionCard } from '@/entities/question';

interface Props {
    questions: Array<IQuestion>
}

const Questions = ({ questions = [] }: Props) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const activeQuestion = questions[activeQuestionIndex];

    console.log('sdafasdf');

    return (
        <section className="row-span-1 col-span-4 bg-slate-100 rounded-lg p-4">
            {activeQuestion  && <ActiveQuestion question={activeQuestion} />}
            <div className="flex flex-wrap gap-3">
                {questions.map((question, index) => (
                    <QuestionCard isActive={index === activeQuestionIndex} key={question.uuid} question={question} onClick={() => setActiveQuestionIndex(index)} />
                ))}
            </div>
        </section>
    )
};

export default Questions;
