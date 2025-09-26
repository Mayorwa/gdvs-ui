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
                name: 'Don Vito Corleone',
                individualType: IndividualType.Individual,
                gender: 'male',
                familyStarted: '@F011@',
                familyComingFrom: '@F001@',
                birthdate: '1926',
                deathdate: '1999',
            },
            partners: [
                {
                    name: 'Carmella Corleone',
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
                    name: 'Antonia Andolini',
                    individualType: IndividualType.Parent,
                    gender: 'male',
                    familyStarted: '@F001@',
                    familyComingFrom: '@F01@',
                    birthdate: '1902',
                    deathdate: '1973',
                },
                {
                    name: 'Signora Andolini',
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
                    name: 'Connie Corleone',
                    individualType: IndividualType.Child,
                    gender: 'female',
                    familyStarted: '@F022@',
                    familyComingFrom: '@F011@',
                    birthdate: '1943',
                    deathdate: '2013',
                },
                {
                    name: 'Sonny Corleone',
                    individualType: IndividualType.Child,
                    gender: 'male',
                    familyStarted: '@F023@',
                    familyComingFrom: '@F011@',
                    birthdate: '1945',
                    deathdate: '2014',
                },
                {
                    name: 'Micheal Corleone',
                    individualType: IndividualType.Child,
                    gender: 'male',
                    familyComingFrom: '@F011@',
                    familyStarted: '@F024@',
                    birthdate: '1965',
                },
                {
                    name: 'Fredo Corleone',
                    individualType: IndividualType.Child,
                    gender: 'male',
                    familyComingFrom: '@F011@',
                    familyStarted: '@F025@',
                    birthdate: '1965',
                }
            ],
        }] as LineageInterface[]
    }),
    actions: {
        populateIndividualLineage(FamilyStartedId: string) {
            const i = this.checkIfIndexIsOpen(FamilyStartedId)
            if(i >= 0) {
                return i;
            }
            const data = sampleData[FamilyStartedId]
            const idx = this.getOpenedSiblingsIndex(data.root.familyComingFrom)

            if (idx >= 0) {
                this.lineage.splice(idx)
            }
            this.lineage.push(data);
            return this.lineage.length - 1;
        },
        getOpenedSiblingsIndex(FamilyComingFromId: string) {
            return this.lineage.findIndex(obj => obj.root.familyComingFrom === FamilyComingFromId);
        },
        checkIfIndexIsOpen(FamilyStartedId: string) {
            return this.lineage.findIndex(obj => obj.root.familyStarted === FamilyStartedId);
        }
    }
})