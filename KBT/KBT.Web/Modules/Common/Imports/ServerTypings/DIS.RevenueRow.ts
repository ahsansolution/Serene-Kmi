namespace KBT.DIS {
    export interface RevenueRow {
        RevenueId?: number;
        PurchaseOrderId?: number;
        OrderId?: number;
        Credit?: number;
        Debit?: number;
        EntryDate?: string;
        DocumentNo?: string;
        CancelationStatus?: boolean;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderCostId?: number;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderPurchaseOrderStatus?: string;
        OrderOrderNumber?: string;
        OrderOrderDate?: string;
        OrderCustomerDealerId?: number;
        OrderUserId?: number;
        OrderProductTypeId?: number;
        OrderPaymentService?: number;
    }

    export namespace RevenueRow {
        export const idProperty = 'RevenueId';
        export const nameProperty = 'DocumentNo';
        export const localTextPrefix = 'DIS.Revenue';

        export namespace Fields {
            export declare const RevenueId: string;
            export declare const PurchaseOrderId: string;
            export declare const OrderId: string;
            export declare const Credit: string;
            export declare const Debit: string;
            export declare const EntryDate: string;
            export declare const DocumentNo: string;
            export declare const CancelationStatus: string;
            export declare const PurchaseOrderPurchaseOrderNumber: string;
            export declare const PurchaseOrderCompanyId: string;
            export declare const PurchaseOrderPurchaseOrderDate: string;
            export declare const PurchaseOrderCostId: string;
            export declare const PurchaseOrderOrderCategoryId: string;
            export declare const PurchaseOrderPurchaseOrderStatus: string;
            export declare const OrderOrderNumber: string;
            export declare const OrderOrderDate: string;
            export declare const OrderCustomerDealerId: string;
            export declare const OrderUserId: string;
            export declare const OrderProductTypeId: string;
            export declare const OrderPaymentService: string;
        }

        ['RevenueId', 'PurchaseOrderId', 'OrderId', 'Credit', 'Debit', 'EntryDate', 'DocumentNo', 'CancelationStatus', 'PurchaseOrderPurchaseOrderNumber', 'PurchaseOrderCompanyId', 'PurchaseOrderPurchaseOrderDate', 'PurchaseOrderCostId', 'PurchaseOrderOrderCategoryId', 'PurchaseOrderPurchaseOrderStatus', 'OrderOrderNumber', 'OrderOrderDate', 'OrderCustomerDealerId', 'OrderUserId', 'OrderProductTypeId', 'OrderPaymentService'].forEach(x => (<any>Fields)[x] = x);
    }
}

