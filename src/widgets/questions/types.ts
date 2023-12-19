import { COMPLEXITY } from "@/entities";

export interface IQuestion {
    tagUuid: string;
    uuid: string;
    description: string;
    title: string;
    level: COMPLEXITY;
}
