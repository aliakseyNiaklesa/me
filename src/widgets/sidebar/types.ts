import { ITag } from "@/entities/tag-link/types";

export interface ISidebarProps {
    tags: Array<ITag>
}

export interface IForm {
    complexity: number;
    search: string;
}
