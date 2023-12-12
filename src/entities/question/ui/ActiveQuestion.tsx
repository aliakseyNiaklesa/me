import { useEffect, useState } from "react";
import { IQuestion } from "../model/types";

interface IProps {
    question: IQuestion;
}

export const ActiveQuestion = ({ question }: IProps) => {
    const { title, description } = question;

    const [feedback, setFeedback] = useState<string>('');

    useEffect(() => {
        const storedFeedback = localStorage.getItem(question.uuid);
        setFeedback(storedFeedback || '');
    }, [question.uuid]);

    const onChange = (event: any) => {
        const value = event?.target.value;
        setFeedback(value);
        localStorage.setItem(question.uuid, value);
    }

    return (
        <section className="text-white bg-violet-500 p-4 rounded-lg mb-5">
            <header className="text-4xl font-extrabold ">
                {title}
            </header>
            <span className="font-sans ">{description}</span>
            <textarea
                className="block mt-3 px-2 resize-none text-black w-full rounded-lg"
                name="postContent"
                value={feedback}
                onChange={onChange}
                placeholder="Please write your feedback"
                rows={4}
            />
        </section>
    )
}