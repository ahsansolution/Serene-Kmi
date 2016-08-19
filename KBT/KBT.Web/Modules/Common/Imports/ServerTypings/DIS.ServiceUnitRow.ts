namespace KBT.DIS {
    export interface ServiceUnitRow {
        ServiceUnitId?: number;
        ProductId?: number;
        CustomerDealerId?: number;
        OrderUnitId?: number;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductPartNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        ProductMerek?: string;
        ProductPoliceNumber?: string;
        ProductMachineNo?: string;
        ProductSerialNumber?: string;
        ProductColor?: string;
        ProductManufactureYear?: number;
        CustomerDealerCustomerDealerName?: string;
        CustomerDealerAddress?: string;
        OrderUnitOrderNumber?: string;
        OrderUnitOrderDate?: string;
        OrderUnitCustomerDealerId?: number;
        OrderUnitUserId?: number;
        OrderUnitProductTypeId?: number;
        OrderUnitKmInUse?: number;
        OrderUnitPaymentService?: number;
        OrderUnitOrderStatus?: string;
        DetailList?: ServiceUnitDetailRow[];
    }

    export namespace ServiceUnitRow {
        export const idProperty = 'ServiceUnitId';
        export const localTextPrefix = 'DIS.ServiceUnit';
        export const lookupKey = 'DIS.ServiceUnit';

        export function getLookup(): Q.Lookup<ServiceUnitRow> {
            return Q.getLookup<ServiceUnitRow>('DIS.ServiceUnit');
        }

        export namespace Fields {
            export declare const ServiceUnitId: string;
            export declare const ProductId: string;
            export declare const CustomerDealerId: string;
            export declare const OrderUnitId: string;
            export declare const ProductProductName: string;
            export declare const ProductProductNumber: string;
            export declare const ProductPartNumber: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductProductTypeId: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductDescription: string;
            export declare const ProductBinLocation: string;
            export declare const ProductMerek: string;
            export declare const ProductPoliceNumber: string;
            export declare const ProductMachineNo: string;
            export declare const ProductSerialNumber: string;
            export declare const ProductColor: string;
            export declare const ProductManufactureYear: string;
            export declare const CustomerDealerCustomerDealerName: string;
            export declare const CustomerDealerAddress: string;
            export declare const OrderUnitOrderNumber: string;
            export declare const OrderUnitOrderDate: string;
            export declare const OrderUnitCustomerDealerId: string;
            export declare const OrderUnitUserId: string;
            export declare const OrderUnitProductTypeId: string;
            export declare const OrderUnitKmInUse: string;
            export declare const OrderUnitPaymentService: string;
            export declare const OrderUnitOrderStatus: string;
            export declare const DetailList: string;
        }

        ['ServiceUnitId', 'ProductId', 'CustomerDealerId', 'OrderUnitId', 'ProductProductName', 'ProductProductNumber', 'ProductPartNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'ProductMerek', 'ProductPoliceNumber', 'ProductMachineNo', 'ProductSerialNumber', 'ProductColor', 'ProductManufactureYear', 'CustomerDealerCustomerDealerName', 'CustomerDealerAddress', 'OrderUnitOrderNumber', 'OrderUnitOrderDate', 'OrderUnitCustomerDealerId', 'OrderUnitUserId', 'OrderUnitProductTypeId', 'OrderUnitKmInUse', 'OrderUnitPaymentService', 'OrderUnitOrderStatus', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

