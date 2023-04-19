import React from 'react';
import Link from 'next/link';
import { ITag } from './types';

interface Props {
    tag: ITag,
}

const TagLink = ({ tag }: Props) => {
    return (
        <Link
            href={`/interview/${tag.id}`}
        >
            {tag.title}
        </Link>
    )
};

export default TagLink;
