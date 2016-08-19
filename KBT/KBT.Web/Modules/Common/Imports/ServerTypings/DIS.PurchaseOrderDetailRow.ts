namespace KBT.DIS {
    export interface PurchaseOrderDetailRow {
        PurchaseOrderDetailId?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        ProductPriceId?: number;
        Price?: number;
        LineTotal?: number;
        CostTotal?: number;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderCostId?: number;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderPurchaseOrderStatus?: string;
        ProductProductName?: string;
        ProductSerialNumber?: string;
        ProductColor?: string;
        ProductManufactureYear?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
    }

    export namespace PurchaseOrderDetailRow {
        export const idProperty = 'PurchaseOrderDetailId';
        export const localTextPrefix = 'DIS.PurchaseOrderDetail';
        export const lookupKey = 'DIS.PurchaseOrderDetail';

        export function getLookup(): Q.Lookup<PurchaseOrderDetailRow> {
            return Q.getLookup<PurchaseOrderDetailRow>('DIS.PurchaseOrderDetail');
        }

        export namespace Fields {
            export declare const PurchaseOrderDetailId: string;
            export declare const PurchaseOrderId: string;
            export declare const ProductId: string;
            export declare const Quantity: string;
            export declare const ProductPriceId: string;
            export declare const Price: string;
            export declare const LineTotal: string;
            export declare const CostTotal: string;
            export declare const PurchaseOrderPurchaseOrderNumber: string;
            export declare const PurchaseOrderCompanyId: string;
            export declare const PurchaseOrderPurchaseOrderDate: string;
            export declare const PurchaseOrderCostId: string;
            export declare const PurchaseOrderOrderCategoryId: string;
            export declare const PurchaseOrderPurchaseOrderStatus: string;
            export declare const ProductProductName: string;
            export declare const ProductSerialNumber: string;
            export declare const ProductColor: string;
            export declare const ProductManufactureYear: string;
            export declare const ProductProductNumber: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductProductTypeId: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductDescription: string;
            export declare const ProductBinLocation: string;
        }

        ['PurchaseOrderDetailId', 'PurchaseOrderId', 'ProductId', 'Quantity', 'ProductPriceId', 'Price', 'LineTotal', 'CostTotal', 'PurchaseOrderPurchaseOrderNumber', 'PurchaseOrderCompanyId', 'PurchaseOrderPurchaseOrderDate', 'PurchaseOrderCostId', 'PurchaseOrderOrderCategoryId', 'PurchaseOrderPurchaseOrderStatus', 'ProductProductName', 'ProductSerialNumber', 'ProductColor', 'ProductManufactureYear', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation'].forEach(x => (<any>Fields)[x] = x);
    }
}

