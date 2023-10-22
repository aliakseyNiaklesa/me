import { ITag } from "@/entities";


export interface ISidebarProps {
    tags: Array<ITag>,
    currentTagUuid: string,
}

export interface IForm {
    complexity: number,
    search: string,
}
