namespace KBT.DIS {
    export interface ProductPriceRow {
        ProductPriceId?: number;
        ProductId?: number;
        OrderCategoryId?: number;
        Price?: number;
        IsActive?: boolean;
        EntryDate?: string;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        OrderCategoryOrderCategoryName?: string;
        OrderCategoryDescription?: string;
    }

    export namespace ProductPriceRow {
        export const idProperty = 'ProductPriceId';
        export const localTextPrefix = 'DIS.ProductPrice';
        export const lookupKey = 'DIS.ProductPrice';

        export function getLookup(): Q.Lookup<ProductPriceRow> {
            return Q.getLookup<ProductPriceRow>('DIS.ProductPrice');
        }

        export namespace Fields {
            export declare const ProductPriceId: string;
            export declare const ProductId: string;
            export declare const OrderCategoryId: string;
            export declare const Price: string;
            export declare const IsActive: string;
            export declare const EntryDate: string;
            export declare const ProductProductName: string;
            export declare const ProductProductNumber: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductProductTypeId: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductDescription: string;
            export declare const ProductBinLocation: string;
            export declare const OrderCategoryOrderCategoryName: string;
            export declare const OrderCategoryDescription: string;
        }

        ['ProductPriceId', 'ProductId', 'OrderCategoryId', 'Price', 'IsActive', 'EntryDate', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'OrderCategoryOrderCategoryName', 'OrderCategoryDescription'].forEach(x => (<any>Fields)[x] = x);
    }
}

