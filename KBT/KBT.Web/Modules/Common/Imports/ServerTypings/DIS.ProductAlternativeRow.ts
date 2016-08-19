namespace KBT.DIS {
    export interface ProductAlternativeRow {
        ProductAlternativeId?: number;
        ProductIdMain?: number;
        ProductIdAlt?: number;
        SeqNo?: number;
        ProductIdAltProductName?: string;
        ProductIdAltProductNumber?: string;
        ProductIdAltPartNumber?: string;
        ProductIdAltProductCategoryId?: number;
        ProductIdAltProductTypeId?: number;
        ProductIdAltDiscontinued?: boolean;
        ProductIdAltProductImage?: string;
        ProductIdAltDescription?: string;
        ProductIdAltBinLocation?: string;
        ProductIdAltMerek?: string;
        ProductIdAltPoliceNumber?: string;
        ProductIdAltMachineNo?: string;
        ProductIdAltSerialNumber?: string;
        ProductIdAltColor?: string;
        ProductIdAltManufactureYear?: number;
    }

    export namespace ProductAlternativeRow {
        export const idProperty = 'ProductAlternativeId';
        export const localTextPrefix = 'DIS.ProductAlternative';

        export namespace Fields {
            export declare const ProductAlternativeId: string;
            export declare const ProductIdMain: string;
            export declare const ProductIdAlt: string;
            export declare const SeqNo: string;
            export declare const ProductIdAltProductName: string;
            export declare const ProductIdAltProductNumber: string;
            export declare const ProductIdAltPartNumber: string;
            export declare const ProductIdAltProductCategoryId: string;
            export declare const ProductIdAltProductTypeId: string;
            export declare const ProductIdAltDiscontinued: string;
            export declare const ProductIdAltProductImage: string;
            export declare const ProductIdAltDescription: string;
            export declare const ProductIdAltBinLocation: string;
            export declare const ProductIdAltMerek: string;
            export declare const ProductIdAltPoliceNumber: string;
            export declare const ProductIdAltMachineNo: string;
            export declare const ProductIdAltSerialNumber: string;
            export declare const ProductIdAltColor: string;
            export declare const ProductIdAltManufactureYear: string;
        }

        ['ProductAlternativeId', 'ProductIdMain', 'ProductIdAlt', 'SeqNo', 'ProductIdAltProductName', 'ProductIdAltProductNumber', 'ProductIdAltPartNumber', 'ProductIdAltProductCategoryId', 'ProductIdAltProductTypeId', 'ProductIdAltDiscontinued', 'ProductIdAltProductImage', 'ProductIdAltDescription', 'ProductIdAltBinLocation', 'ProductIdAltMerek', 'ProductIdAltPoliceNumber', 'ProductIdAltMachineNo', 'ProductIdAltSerialNumber', 'ProductIdAltColor', 'ProductIdAltManufactureYear'].forEach(x => (<any>Fields)[x] = x);
    }
}

