import classNames from "classnames";
import { IQuestion } from "../model/types"


interface IProps {
    question: IQuestion;
    onClick: () => void;
    isActive: boolean;
}

export const QuestionCard = ({ question, onClick, isActive }: IProps) => {
    const { title, description } = question;
    return (
        <section onClick={onClick} className={
            classNames('box-border cursor-pointer hover:bg-violet-100 hover:border-violet-200 overflow-hidden rounded-lg h-72 w-72 p-4 border-4', {
                'border-violet-200': isActive,
            })
        }>
            <h2 className="text-2xl font-extrabold mb-2">
                {title}
            </h2>
            <p className={`text-ellipsis font-sans text-base antialiased font-light leading-relaxed text-inherit`}>
                {description}
            </p>
        </section>
    )
}