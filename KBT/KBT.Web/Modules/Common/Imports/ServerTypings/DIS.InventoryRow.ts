namespace KBT.DIS {
    export interface InventoryRow {
        InventoryId?: number;
        ProductId?: number;
        OrderCategoryId?: number;
        OrderCategoryOrderCategoryName?: string;
        Qty?: number;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        InventoryStatus?: string;
        DocumentNo?: string;
        EntryDate?: string;
    }

    export namespace InventoryRow {
        export const idProperty = 'InventoryId';
        export const nameProperty = 'ProductProductName';
        export const localTextPrefix = 'DIS.Inventory';
        export const lookupKey = 'DIS.Inventory';

        export function getLookup(): Q.Lookup<InventoryRow> {
            return Q.getLookup<InventoryRow>('DIS.Inventory');
        }

        export namespace Fields {
            export declare const InventoryId: string;
            export declare const ProductId: string;
            export declare const OrderCategoryId: string;
            export declare const OrderCategoryOrderCategoryName: string;
            export declare const Qty: string;
            export declare const ProductProductName: string;
            export declare const ProductProductNumber: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductProductTypeId: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductDescription: string;
            export declare const ProductBinLocation: string;
            export declare const InventoryStatus: string;
            export declare const DocumentNo: string;
            export declare const EntryDate: string;
        }

        ['InventoryId', 'ProductId', 'OrderCategoryId', 'OrderCategoryOrderCategoryName', 'Qty', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'InventoryStatus', 'DocumentNo', 'EntryDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

