namespace KBT.DIS {
    export interface ServiceUnitDetailRow {
        ServiceUnitDetailId?: number;
        ServiceUnitId?: number;
        ServiceCharge?: number;
        KmInUse?: number;
        ServiceDate?: string;
        ServiceUnitProductId?: number;
        ServiceUnitCustomerDealerId?: number;
        ServiceUnitOrderUnitId?: number;
        OrderIDService?: number;
        DetailList?: OrderDetailRow[];
    }

    export namespace ServiceUnitDetailRow {
        export const idProperty = 'ServiceUnitDetailId';
        export const localTextPrefix = 'DIS.ServiceUnitDetail';

        export namespace Fields {
            export declare const ServiceUnitDetailId: string;
            export declare const ServiceUnitId: string;
            export declare const ServiceCharge: string;
            export declare const KmInUse: string;
            export declare const ServiceDate: string;
            export declare const ServiceUnitProductId: string;
            export declare const ServiceUnitCustomerDealerId: string;
            export declare const ServiceUnitOrderUnitId: string;
            export declare const OrderIDService: string;
            export declare const DetailList: string;
        }

        ['ServiceUnitDetailId', 'ServiceUnitId', 'ServiceCharge', 'KmInUse', 'ServiceDate', 'ServiceUnitProductId', 'ServiceUnitCustomerDealerId', 'ServiceUnitOrderUnitId', 'OrderIDService', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

