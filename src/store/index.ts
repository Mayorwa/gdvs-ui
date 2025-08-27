import { defineStore } from 'pinia'
import {IndividualType} from "../types";

interface IndividualInterface {
    name: string,
    individualType: IndividualType,
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
                birthdate: '1926',
                deathdate: '1999',
            },
            partners: [
                {
                    name: 'Monica Allison',
                    individualType: IndividualType.Partner,
                    gender: 'female',
                    birthdate: '1930',
                    deathdate: '2003',
                },
            ],
            parents: [
                {
                    name: 'David Allison',
                    individualType: IndividualType.Parent,
                    gender: 'male',
                    birthdate: '1902',
                    deathdate: '1973',
                },
                {
                    name: 'Sandra Park-Allison',
                    individualType: IndividualType.Parent,
                    gender: 'female',
                    birthdate: '1910',
                    deathdate: '1983',
                }
            ],
            children: [
                {
                    name: 'Rachael Allison',
                    individualType: IndividualType.Child,
                    gender: 'female',
                    birthdate: '1943',
                    deathdate: '2013',
                },
                {
                    name: 'Jennifer Allison',
                    individualType: IndividualType.Child,
                    gender: 'female',
                    birthdate: '1945',
                    deathdate: '2014',
                },
                {
                    name: 'Peter II Allison',
                    individualType: IndividualType.Child,
                    gender: 'male',
                    birthdate: '1965',
                }
            ],
        }] as LineageInterface[]
    }),
    actions: {
        setLineage(payload: any) {
            this.lineage = payload;
        }
    }
})