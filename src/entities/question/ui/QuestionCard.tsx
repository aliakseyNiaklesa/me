import { IQuestion } from "../model/types"


interface IProps {
    question: IQuestion;
}

export const QuestionCard = ({ question }: IProps) => {
    const { title, description } = question;
    return (
        <section className="box-border overflow-hidden rounded-lg h-72 w-72 p-4 border-4">
            <h2 className="text-2xl font-extrabold mb-2">
                {title}
            </h2>
            <p className={`text-ellipsis font-sans text-base antialiased font-light leading-relaxed text-inherit`}>
                {description}
            </p>
        </section>
    )
}