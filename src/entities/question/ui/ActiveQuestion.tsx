import { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { IQuestion } from '../model/types';

interface IProps {
    question: IQuestion;
}

export const ActiveQuestion = ({ question }: IProps) => {
    const { title, description, examples, links } = question;

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
            <span className="font-sans "><pre>{description}</pre></span>
            {examples?.map((text, index) => (
                <div className="collapse bg-violet-700 mb-3 mt-3">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Example {++index}
                    </div>
                    <div className="collapse-content">
                        <pre>
                            <code>
                                {text}
                            </code>
                        </pre>
                    </div>
                </div>
            ))}
            <textarea
                className="block mt-3 px-2 resize-none text-black w-full rounded-lg"
                name="postContent"
                value={feedback}
                onChange={onChange}
                placeholder="Please write your feedback"
                rows={4}
            />
            <footer className='flex justify-end p-1'>
                {links?.article?.map((link) => (
                    <a href={link} target="_blank">
                        <FontAwesomeIcon icon={faFile} />
                    </a>
                ))}
                {links?.youtube?.map((link) => (
                    <a href={link} target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                ))}
            </footer>
        </section>
    )
}