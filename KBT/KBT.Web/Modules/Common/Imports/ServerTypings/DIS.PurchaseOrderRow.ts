namespace KBT.DIS {
    export interface PurchaseOrderRow {
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        CompanyId?: number;
        PurchaseOrderDate?: string;
        CostId?: number;
        OrderCategoryId?: number;
        PurchaseOrderOrderCategoryName?: string;
        PurchaseOrderStatus?: string;
        CostCostName?: string;
        CostAmount?: number;
        CostPercentage?: number;
        ProductTypeId?: number;
        ProductTypeName?: string;
        DetailList?: PurchaseOrderDetailRow[];
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'PurchaseOrderId';
        export const nameProperty = 'PurchaseOrderNumber';
        export const localTextPrefix = 'DIS.PurchaseOrder';
        export const lookupKey = 'DIS.PurchaseOrder';

        export function getLookup(): Q.Lookup<PurchaseOrderRow> {
            return Q.getLookup<PurchaseOrderRow>('DIS.PurchaseOrder');
        }

        export namespace Fields {
            export declare const PurchaseOrderId: string;
            export declare const PurchaseOrderNumber: string;
            export declare const CompanyId: string;
            export declare const PurchaseOrderDate: string;
            export declare const CostId: string;
            export declare const OrderCategoryId: string;
            export declare const PurchaseOrderOrderCategoryName: string;
            export declare const PurchaseOrderStatus: string;
            export declare const CostCostName: string;
            export declare const CostAmount: string;
            export declare const CostPercentage: string;
            export declare const ProductTypeId: string;
            export declare const ProductTypeName: string;
            export declare const DetailList: string;
        }

        ['PurchaseOrderId', 'PurchaseOrderNumber', 'CompanyId', 'PurchaseOrderDate', 'CostId', 'OrderCategoryId', 'PurchaseOrderOrderCategoryName', 'PurchaseOrderStatus', 'CostCostName', 'CostAmount', 'CostPercentage', 'ProductTypeId', 'ProductTypeName', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

