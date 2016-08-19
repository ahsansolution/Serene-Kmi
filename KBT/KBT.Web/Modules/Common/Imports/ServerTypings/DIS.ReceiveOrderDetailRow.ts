namespace KBT.DIS {
    export interface ReceiveOrderDetailRow {
        ReceiveOrderDetailId?: number;
        ReceiveOrderId?: number;
        ProductId?: number;
        ReceiveQty?: number;
        BackOrderQty?: number;
        POQty?: number;
        Price?: number;
        ProductName?: string;
        BinLocation?: string;
        ReceiveComplete?: boolean;
        ReceiveOrderNumber?: string;
        ReceiveOrderPurchaseOrderId?: number;
        ReceiveOrderReceiveDate?: string;
        ReceiveOrderReceiveBy?: string;
        ReceiveOrderAcknowledgeBy?: string;
        ReceiveOrderReceiveOrderStatus?: string;
    }

    export namespace ReceiveOrderDetailRow {
        export const idProperty = 'ReceiveOrderDetailId';
        export const nameProperty = 'ReceiveOrderNumber';
        export const localTextPrefix = 'DIS.ReceiveOrderDetail';
        export const lookupKey = 'DIS.ReceiveOrderDetail';

        export function getLookup(): Q.Lookup<ReceiveOrderDetailRow> {
            return Q.getLookup<ReceiveOrderDetailRow>('DIS.ReceiveOrderDetail');
        }

        export namespace Fields {
            export declare const ReceiveOrderDetailId: string;
            export declare const ReceiveOrderId: string;
            export declare const ProductId: string;
            export declare const ReceiveQty: string;
            export declare const BackOrderQty: string;
            export declare const POQty: string;
            export declare const Price: string;
            export declare const ProductName: string;
            export declare const BinLocation: string;
            export declare const ReceiveComplete: string;
            export declare const ReceiveOrderNumber: string;
            export declare const ReceiveOrderPurchaseOrderId: string;
            export declare const ReceiveOrderReceiveDate: string;
            export declare const ReceiveOrderReceiveBy: string;
            export declare const ReceiveOrderAcknowledgeBy: string;
            export declare const ReceiveOrderReceiveOrderStatus: string;
        }

        ['ReceiveOrderDetailId', 'ReceiveOrderId', 'ProductId', 'ReceiveQty', 'BackOrderQty', 'POQty', 'Price', 'ProductName', 'BinLocation', 'ReceiveComplete', 'ReceiveOrderNumber', 'ReceiveOrderPurchaseOrderId', 'ReceiveOrderReceiveDate', 'ReceiveOrderReceiveBy', 'ReceiveOrderAcknowledgeBy', 'ReceiveOrderReceiveOrderStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

