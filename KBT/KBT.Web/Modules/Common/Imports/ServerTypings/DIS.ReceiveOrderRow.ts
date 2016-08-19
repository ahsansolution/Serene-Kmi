namespace KBT.DIS {
    export interface ReceiveOrderRow {
        ReceiveOrderId?: number;
        ReceiveOrderNumber?: string;
        PurchaseOrderId?: number;
        ReceiveDate?: string;
        ReceiveBy?: string;
        AcknowledgeBy?: string;
        ReceiveOrderStatus?: string;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderCostId?: number;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderPurchaseOrderStatus?: string;
        DetailList?: ReceiveOrderDetailRow[];
    }

    export namespace ReceiveOrderRow {
        export const idProperty = 'ReceiveOrderId';
        export const nameProperty = 'ReceiveOrderNumber';
        export const localTextPrefix = 'DIS.ReceiveOrder';
        export const lookupKey = 'DIS.ReceiveOrder';

        export function getLookup(): Q.Lookup<ReceiveOrderRow> {
            return Q.getLookup<ReceiveOrderRow>('DIS.ReceiveOrder');
        }

        export namespace Fields {
            export declare const ReceiveOrderId: string;
            export declare const ReceiveOrderNumber: string;
            export declare const PurchaseOrderId: string;
            export declare const ReceiveDate: string;
            export declare const ReceiveBy: string;
            export declare const AcknowledgeBy: string;
            export declare const ReceiveOrderStatus: string;
            export declare const PurchaseOrderPurchaseOrderNumber: string;
            export declare const PurchaseOrderCompanyId: string;
            export declare const PurchaseOrderPurchaseOrderDate: string;
            export declare const PurchaseOrderCostId: string;
            export declare const PurchaseOrderOrderCategoryId: string;
            export declare const PurchaseOrderPurchaseOrderStatus: string;
            export declare const DetailList: string;
        }

        ['ReceiveOrderId', 'ReceiveOrderNumber', 'PurchaseOrderId', 'ReceiveDate', 'ReceiveBy', 'AcknowledgeBy', 'ReceiveOrderStatus', 'PurchaseOrderPurchaseOrderNumber', 'PurchaseOrderCompanyId', 'PurchaseOrderPurchaseOrderDate', 'PurchaseOrderCostId', 'PurchaseOrderOrderCategoryId', 'PurchaseOrderPurchaseOrderStatus', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

