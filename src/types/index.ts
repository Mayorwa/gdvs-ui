export interface FamilyInterface{
    id: string;
    husband: string;
    wife: string;
    isSeparated: boolean;
    children?: string[];
}

// @FAMS - Family why the individual is a spouse
// @FAMC - Family why the individual is a child
export interface IndividualInterface{
    id: string;
    name: string;
    FAMS: string[];
    FAMC?: string;
}

export enum IndividualType {
    Individual = 'Individual',
    Parent = 'Parent',
    Partner = 'Partner',
    ExPartner = 'ExPartner',
    Child = 'Child'
};