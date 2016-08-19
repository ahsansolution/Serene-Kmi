namespace KBT.DIS {
    export interface ProductBasePriceRow {
        ProductBasePriceId?: number;
        ProductID?: number;
        Price?: number;
        EntryDate?: string;
        IsActive?: boolean;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
    }

    export namespace ProductBasePriceRow {
        export const idProperty = 'ProductBasePriceId';
        export const localTextPrefix = 'DIS.ProductBasePrice';
        export const lookupKey = 'DIS.ProductBasePrice';

        export function getLookup(): Q.Lookup<ProductBasePriceRow> {
            return Q.getLookup<ProductBasePriceRow>('DIS.ProductBasePrice');
        }

        export namespace Fields {
            export declare const ProductBasePriceId: string;
            export declare const ProductID: string;
            export declare const Price: string;
            export declare const EntryDate: string;
            export declare const IsActive: string;
            export declare const ProductProductName: string;
            export declare const ProductProductNumber: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductProductTypeId: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductDescription: string;
            export declare const ProductBinLocation: string;
        }

        ['ProductBasePriceId', 'ProductID', 'Price', 'EntryDate', 'IsActive', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation'].forEach(x => (<any>Fields)[x] = x);
    }
}

