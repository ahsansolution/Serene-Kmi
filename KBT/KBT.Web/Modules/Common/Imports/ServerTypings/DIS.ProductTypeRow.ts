namespace KBT.DIS {
    export interface ProductTypeRow {
        ProductTypeId?: number;
        ProductTypeName?: string;
    }

    export namespace ProductTypeRow {
        export const idProperty = 'ProductTypeId';
        export const nameProperty = 'ProductTypeName';
        export const localTextPrefix = 'DIS.ProductType';
        export const lookupKey = 'DIS.ProductType';

        export function getLookup(): Q.Lookup<ProductTypeRow> {
            return Q.getLookup<ProductTypeRow>('DIS.ProductType');
        }

        export namespace Fields {
            export declare const ProductTypeId: string;
            export declare const ProductTypeName: string;
        }

        ['ProductTypeId', 'ProductTypeName'].forEach(x => (<any>Fields)[x] = x);
    }
}

