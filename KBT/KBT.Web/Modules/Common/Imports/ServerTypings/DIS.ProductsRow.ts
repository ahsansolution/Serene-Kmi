namespace KBT.DIS {
    export interface ProductsRow {
        ProductID?: number;
        ProductName?: string;
        ProductNumber?: string;
        ProductCategoryId?: number;
        ProductTypeId?: number;
        Discontinued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        ProductCategoryProductCategoryName?: string;
        ProductTypeProductTypeName?: string;
        Merek?: string;
        PoliceNumber?: string;
        MachineNo?: string;
        SerialNumber?: string;
        PartNumber?: string;
        Color?: string;
        UnitStock?: string;
        ManufactureYear?: number;
        ProductAltList?: ProductAlternativeRow[];
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductID';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'DIS.Products';
        export const lookupKey = 'DIS.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('DIS.Products');
        }

        export namespace Fields {
            export declare const ProductID: string;
            export declare const ProductName: string;
            export declare const ProductNumber: string;
            export declare const ProductCategoryId: string;
            export declare const ProductTypeId: string;
            export declare const Discontinued: string;
            export declare const ProductImage: string;
            export declare const Description: string;
            export declare const BinLocation: string;
            export declare const ProductCategoryProductCategoryName: string;
            export declare const ProductTypeProductTypeName: string;
            export declare const Merek: string;
            export declare const PoliceNumber: string;
            export declare const MachineNo: string;
            export declare const SerialNumber: string;
            export declare const PartNumber: string;
            export declare const Color: string;
            export declare const UnitStock: string;
            export declare const ManufactureYear: string;
            export declare const ProductAltList: string;
        }

        ['ProductID', 'ProductName', 'ProductNumber', 'ProductCategoryId', 'ProductTypeId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'ProductCategoryProductCategoryName', 'ProductTypeProductTypeName', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'PartNumber', 'Color', 'UnitStock', 'ManufactureYear', 'ProductAltList'].forEach(x => (<any>Fields)[x] = x);
    }
}

