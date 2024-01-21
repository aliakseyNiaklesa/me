import React from 'react';
import Link from 'next/link';
import { ITag } from '../model/types';
import classNames from 'classnames';

interface IProps {
    tag: ITag,
    isActive: boolean,
};

export const TagLink = ({ tag, isActive }: IProps) => {
    return (
        <Link
            className={classNames(
                'w-full flex justify-between block p-4 rounded-l-lg hover:bg-slate-100 mb-1', {
                'bg-slate-100': isActive,
            })}
            href={`/interview/${tag.id}`}
        >
            <span>{tag.title}</span>
            <span>({tag.questions})</span>
        </Link>
    )
};
