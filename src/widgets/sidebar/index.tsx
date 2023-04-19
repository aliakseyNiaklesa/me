import React from 'react';

import TagLink from '@/entities/tag-link';

import { ISidebarProps } from './types';

const Sidebar = ({ tags }: ISidebarProps) => {
    return <aside>
        <ul>
           {tags.map((tag) => (
               <li key={tag.id}>
                   <TagLink tag={tag}/>
               </li>
           ))}
        </ul>
    </aside>
}

export default Sidebar;