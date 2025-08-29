import { defineStore } from 'pinia'
import {IndividualType} from "../types";
import {sampleData} from "../schemas";

interface IndividualInterface {
    name: string,
    individualType: IndividualType,
    familyStarted?: string,
    familyComingFrom?: string,
    gender: string,
    birthdate: string,
    deathdate?: string,
}

interface LineageInterface {
    root: IndividualInterface;
    partners: IndividualInterface[];
    parents?: IndividualInterface[];
    children: IndividualInterface[];
}

export const useLineage = defineStore('lineage', {
    state: () => ({
        lineage: [{
            root: {
                name: 'Peter Allison',
                individualType: IndividualType.Individual,
                gender: 'male',
                familyStarted: '@F011@',
                familyComingFrom: '@F001@',
                birthdate: '1926',
                deathdate: '1999',
            },
            partners: [
                {
                    name: 'Monica Allison',
                    individualType: IndividualType.Partner,
                    gender: 'female',
                    familyStarted: '@F011@',
                    familyComingFrom: '@F002@',
                    birthdate: '1930',
                    deathdate: '2003',
                },
            ],
            parents: [
                {
                    name: 'David Allison',
                    individualType: IndividualType.Parent,
                    gender: 'male',
                    familyStarted: '@F001@',
                    familyComingFrom: '@F01@',
                    birthdate: '1902',
                    deathdate: '1973',
                },
                {
                    name: 'Sandra Park-Allison',
                    individualType: IndividualType.Parent,
                    gender: 'female',
                    familyStarted: '@F001@',
                    familyComingFrom: '@F02@',
                    birthdate: '1910',
                    deathdate: '1983',
                }
            ],
            children: [
                {
                    name: 'Rachael Allison',
                    individualType: IndividualType.Child,
                    gender: 'female',
                    familyStarted: '@F022@',
                    familyComingFrom: '@F011@',
                    birthdate: '1943',
                    deathdate: '2013',
                },
                {
                    name: 'Jennifer Allison',
                    individualType: IndividualType.Child,
                    gender: 'female',
                    familyStarted: '@F023@',
                    familyComingFrom: '@F011@',
                    birthdate: '1945',
                    deathdate: '2014',
                },
                {
                    name: 'Peter II Allison',
                    individualType: IndividualType.Child,
                    gender: 'male',
                    familyComingFrom: '@F011@',
                    familyStarted: '@F024@',
                    birthdate: '1965',
                }/*,
                {
                    name: 'David II Allison',
                    individualType: IndividualType.Child,
                    gender: 'male',
                    birthdate: '1965',
                }*/
            ],
        }] as LineageInterface[]
    }),
    actions: {
        populateIndividualLineage(FamilyStartedId: string) {
            console.log("::::before::::", this.lineage)
            this.lineage.push(sampleData[FamilyStartedId])
            console.log("::::after::::", this.lineage)
        }
    }
})