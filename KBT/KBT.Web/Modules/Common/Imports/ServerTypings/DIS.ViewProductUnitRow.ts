namespace KBT.DIS {
    export interface ViewProductUnitRow {
        OrderNumber?: string;
        CustomerDealerName?: string;
        Address?: string;
        ProductName?: string;
        SerialNumber?: string;
        ManufactureYear?: number;
        Color?: string;
        OrderId?: number;
        OrderDetailId?: number;
        OrderDate?: string;
    }

    export namespace ViewProductUnitRow {
        export const nameProperty = 'OrderNumber';
        export const localTextPrefix = 'DIS.ViewProductUnit';

        export namespace Fields {
            export declare const OrderNumber: string;
            export declare const CustomerDealerName: string;
            export declare const Address: string;
            export declare const ProductName: string;
            export declare const SerialNumber: string;
            export declare const ManufactureYear: string;
            export declare const Color: string;
            export declare const OrderId: string;
            export declare const OrderDetailId: string;
            export declare const OrderDate: string;
        }

        ['OrderNumber', 'CustomerDealerName', 'Address', 'ProductName', 'SerialNumber', 'ManufactureYear', 'Color', 'OrderId', 'OrderDetailId', 'OrderDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

