import { COMPLEXITY, ITag } from "@/entities";


export interface ISidebarProps {
    tags: Array<ITag>,
    currentTagUuid: string,
    setComplexity: (value: COMPLEXITY) => void,
    complexity: COMPLEXITY,
}

export interface IForm {
    complexity: number,
    tagTitle: string,
}
