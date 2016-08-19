namespace KBT.DIS {
    export interface OrdersRow {
        OrderId?: number;
        OrderDate?: string;
        CustomerDealerId?: number;
        UserId?: number;
        ProductTypeID?: number;
        OrderNumber?: string;
        CustomerDealerCustomerDealerName?: string;
        CustomerDealerAddress?: string;
        OrderStatus?: string;
        DetailList?: OrderDetailRow[];
        PaymentService?: number;
        KmInUse?: number;
    }

    export namespace OrdersRow {
        export const idProperty = 'OrderId';
        export const localTextPrefix = 'DIS.Orders';
        export const lookupKey = 'DIS.Orders';

        export function getLookup(): Q.Lookup<OrdersRow> {
            return Q.getLookup<OrdersRow>('DIS.Orders');
        }

        export namespace Fields {
            export declare const OrderId: string;
            export declare const OrderDate: string;
            export declare const CustomerDealerId: string;
            export declare const UserId: string;
            export declare const ProductTypeID: string;
            export declare const OrderNumber: string;
            export declare const CustomerDealerCustomerDealerName: string;
            export declare const CustomerDealerAddress: string;
            export declare const OrderStatus: string;
            export declare const DetailList: string;
            export declare const PaymentService: string;
            export declare const KmInUse: string;
        }

        ['OrderId', 'OrderDate', 'CustomerDealerId', 'UserId', 'ProductTypeID', 'OrderNumber', 'CustomerDealerCustomerDealerName', 'CustomerDealerAddress', 'OrderStatus', 'DetailList', 'PaymentService', 'KmInUse'].forEach(x => (<any>Fields)[x] = x);
    }
}

