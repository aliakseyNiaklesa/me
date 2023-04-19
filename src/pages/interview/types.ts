export interface ITag {
    id: string;
    color: string;
    title: string;
}

export interface IRequestTag {
    data: {
        Count: number;
        Items: Array<ITag>
        ScannedCount: number
    }
}

export interface IQuestion {
    tagUuid: string;
    uuid: string;
    description: string;
    title: string;
}
