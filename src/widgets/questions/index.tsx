import React, { useContext, useState } from 'react';
import { IQuestion } from './types';
import { ActiveQuestion, QuestionCard } from '@/entities/question';
import { COMPLEXITY } from '@/entities';

interface Props {
    questions: Array<IQuestion>,
    complexity: COMPLEXITY,
}

const Questions = ({ questions = [], complexity }: Props) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const activeQuestion = questions[activeQuestionIndex];
    const sortedQuestions = questions.filter(question => question.level == complexity);

    return (
        <section className="row-span-1 col-span-4 bg-slate-100 rounded-lg p-4 overflow-scroll">
            {activeQuestion && <ActiveQuestion question={activeQuestion} />}
            <div className="flex flex-wrap gap-3 overflow-scroll">
                {sortedQuestions.map((question, index) => (
                    <QuestionCard isActive={index === activeQuestionIndex} key={question.uuid} question={question} onClick={() => setActiveQuestionIndex(index)} />
                ))}
            </div>
        </section>
    )
};

export default Questions;
