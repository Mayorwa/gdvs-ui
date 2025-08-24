import type {FamilyInterface, IndividualInterface} from "../types";

export const rootNodeIndividual: string = '@I399@'
// a sample family tree
export const individuals: IndividualInterface[] = [{
    id: '@I399@',
    name: 'Mary Ann',
    FAMS: [''],
    FAMC: ''
}];

export const families: FamilyInterface[] = [{
    id: '@F1@',
    husband: '@I399@',
    wife: '@I399@',
    isSeparated: false
}];