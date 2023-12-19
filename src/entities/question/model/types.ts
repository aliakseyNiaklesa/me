export type TLink = {
    youtube?: Array<string>;
    article?: Array<string>;
}

export interface IQuestion {
    tagUuid: string;
    uuid: string;
    description: string;
    title: string;
    examples?: Array<string>;
    links?: TLink;
}
