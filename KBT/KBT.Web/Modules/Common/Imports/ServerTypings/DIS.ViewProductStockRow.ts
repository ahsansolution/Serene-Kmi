namespace KBT.DIS {
    export interface ViewProductStockRow {
        ProductId?: number;
        ProductName?: string;
        ProductNumber?: string;
        ProductTypeName?: string;
        TotalIn?: number;
        TotalOut?: number;
        Stock?: number;
        ProductTypeId?: number;
        ProductTypeNameDesc?: string;
    }

    export namespace ViewProductStockRow {
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'DIS.ViewProductStock';
        export const lookupKey = 'DIS.ViewProductStock';

        export function getLookup(): Q.Lookup<ViewProductStockRow> {
            return Q.getLookup<ViewProductStockRow>('DIS.ViewProductStock');
        }

        export namespace Fields {
            export declare const ProductId: string;
            export declare const ProductName: string;
            export declare const ProductNumber: string;
            export declare const ProductTypeName: string;
            export declare const TotalIn: string;
            export declare const TotalOut: string;
            export declare const Stock: string;
            export declare const ProductTypeId: string;
            export declare const ProductTypeNameDesc: string;
        }

        ['ProductId', 'ProductName', 'ProductNumber', 'ProductTypeName', 'TotalIn', 'TotalOut', 'Stock', 'ProductTypeId', 'ProductTypeNameDesc'].forEach(x => (<any>Fields)[x] = x);
    }
}

