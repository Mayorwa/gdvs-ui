import {type FamilyInterface, type IndividualInterface, IndividualType} from "../types";

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

export const sampleData = {
    "@F024@": {
        root: {
            name: 'Peter II Allison',
            individualType: IndividualType.Individual,
            gender: 'male',
            familyComingFrom: '@F011@',
            familyStarted: '@F024@',
            birthdate: '1965',
        },
        partners: [
            {
                name: 'Monica Bing-Allison',
                individualType: IndividualType.Partner,
                gender: 'female',
                birthdate: '1970',
                familyComingFrom: '@F078@',
                familyStarted: '@F024@',
            },
        ],
        children: [
            {
                name: 'Dmitry Allison',
                individualType: IndividualType.Child,
                gender: 'male',
                familyComingFrom: '@F024@',
                birthdate: '1997',
            },
        ]}
    } as Record<string, any>