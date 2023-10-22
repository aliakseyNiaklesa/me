import React from 'react';
import Link from 'next/link';
import { ITag } from '../model/types';

interface IProps {
    tag: ITag,
}

export const TagLink = ({ tag }: IProps) => {
    return (
        <Link
            href={`/interview/${tag.id}`}
        >
            {tag.title}
        </Link>
    )
};
