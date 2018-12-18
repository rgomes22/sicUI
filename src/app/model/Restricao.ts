export class Restricao{
    restrictionId: string;
    restrictionDescription: string;
    productParentId: string;
    productPartId: string;
    restrictionMandatory: string;
    restrictionMaterial: string;
    restrictionMaxOccupationHeight: number=1;
    restrictionMaxOccupationDepth:number=1;
    restrictionMaxOccupationWidth: number=1;
    restrictionMinOccupationHeigth: number=0;
    restrictionMinOccupationDepth: number=0;
    restrictionMinOccupationWidth: number=0;

}