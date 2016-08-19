namespace KBT.DIS {
    export interface ViewPurchaseOrderRow {
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        CompanyId?: number;
        PurchaseOrderDate?: string;
        CostId?: number;
        OrderCategoryId?: number;
        PurchaseOrderStatus?: string;
        OrderCategoryName?: string;
        Description?: string;
        CompanyName?: string;
        Address?: string;
        Fax?: string;
        Logo?: string;
        Phone?: number;
    }

    export namespace ViewPurchaseOrderRow {
        export const idProperty = 'PurchaseOrderId';
        export const nameProperty = 'PurchaseOrderNumber';
        export const localTextPrefix = 'DIS.ViewPurchaseOrder';

        export namespace Fields {
            export declare const PurchaseOrderId: string;
            export declare const PurchaseOrderNumber: string;
            export declare const CompanyId: string;
            export declare const PurchaseOrderDate: string;
            export declare const CostId: string;
            export declare const OrderCategoryId: string;
            export declare const PurchaseOrderStatus: string;
            export declare const OrderCategoryName: string;
            export declare const Description: string;
            export declare const CompanyName: string;
            export declare const Address: string;
            export declare const Fax: string;
            export declare const Logo: string;
            export declare const Phone: string;
        }

        ['PurchaseOrderId', 'PurchaseOrderNumber', 'CompanyId', 'PurchaseOrderDate', 'CostId', 'OrderCategoryId', 'PurchaseOrderStatus', 'OrderCategoryName', 'Description', 'CompanyName', 'Address', 'Fax', 'Logo', 'Phone'].forEach(x => (<any>Fields)[x] = x);
    }
}

