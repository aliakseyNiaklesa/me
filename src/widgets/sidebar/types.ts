import { COMPLEXITY, ITag } from "@/entities";


export interface ISidebarProps {
    tags: Array<ITag>,
    currentTagUuid: string,
}

export interface IForm {
    complexity: number,
    tagTitle: string,
}
