import { IQuestion } from "../model/types";

interface IProps {
    question: IQuestion;
}

export const ActiveQuestion = ({ question }: IProps) => {
    const { title, description } = question;

    return (
        <section className=" text-white bg-violet-500 p-4 rounded-lg mb-5">
            <header className="text-4xl font-extrabold ">
                {title}
            </header>
            <span className="font-sans">{description}</span>
        </section>
    )
}