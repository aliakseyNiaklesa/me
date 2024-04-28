import { ITag } from "@/entities";
import { Rubik } from "next/font/google";
import { FC } from "react";

import './styles.scss';


const fonts = Rubik({ subsets: ['latin'] });

type TProps = {
    tags: Array<ITag>
}

const TelegramQuiz: FC<TProps> = ({ tags }) => {

    console.log(tags);

    return <main className={`${fonts.className}`}>
        {tags.map(tag => (
            <button
                key={tag.id}
                type="button"
                className="w-full block py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                {tag.title}
            </button>
        ))}
    </main>
}

export async function getStaticProps() {
    const { data } = await fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json());

    return {
        props: {
            tags: data.Items,
        }
    }
}

export default TelegramQuiz;
