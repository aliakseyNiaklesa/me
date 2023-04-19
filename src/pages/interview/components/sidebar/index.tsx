import React from 'react';
import Link from 'next/link'
import { ISidebarProps } from './types';

const Sidebar = ({ tags }: ISidebarProps) => {
    return <aside>
        <ul>
           {tags.map((tag) => (
               <li key={tag.id}>
                    <Link
                        href={`/interview/${tag.id}`}
                    >
                       {tag.title}
                    </Link>
               </li>
           ))}
        </ul>
    </aside>
}

export default Sidebar;