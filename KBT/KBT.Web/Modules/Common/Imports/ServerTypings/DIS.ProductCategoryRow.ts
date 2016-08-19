namespace KBT.DIS {
    export interface ProductCategoryRow {
        ProductCategoryId?: number;
        ProductCategoryName?: string;
    }

    export namespace ProductCategoryRow {
        export const idProperty = 'ProductCategoryId';
        export const nameProperty = 'ProductCategoryName';
        export const localTextPrefix = 'DIS.ProductCategory';
        export const lookupKey = 'DIS.ProductCategory';

        export function getLookup(): Q.Lookup<ProductCategoryRow> {
            return Q.getLookup<ProductCategoryRow>('DIS.ProductCategory');
        }

        export namespace Fields {
            export declare const ProductCategoryId: string;
            export declare const ProductCategoryName: string;
        }

        ['ProductCategoryId', 'ProductCategoryName'].forEach(x => (<any>Fields)[x] = x);
    }
}

