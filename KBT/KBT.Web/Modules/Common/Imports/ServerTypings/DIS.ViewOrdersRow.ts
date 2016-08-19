namespace KBT.DIS {
    export interface ViewOrdersRow {
        OrderId?: number;
        OrderNumber?: string;
        OrderDate?: string;
        CustomerDealerId?: number;
        UserId?: number;
        ProductTypeId?: number;
        KmInUse?: number;
        PaymentService?: number;
        OrderStatus?: string;
        OrderDetailId?: number;
        ProductId?: number;
        OrderQty?: number;
        ProductPriceId?: number;
        CostId?: number;
        OrderCategoryId?: number;
        BasePrice?: number;
        Total?: number;
        Ppn?: number;
        ServiceQuantity?: number;
        ServiceUnitDetailId?: number;
        CustomerDealerName?: string;
        Address?: string;
        ProductTypeName?: string;
        ProductName?: string;
        ProductNumber?: string;
        PartNumber?: string;
        ProductCategoryId?: number;
        Discontinued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        Merek?: string;
        PoliceNumber?: string;
        MachineNo?: string;
        SerialNumber?: string;
        Color?: string;
        ManufactureYear?: number;
        ServiceUnitId?: number;
        ServiceCharge?: number;
        ServiceDate?: string;
        OrderIdService?: number;
    }

    export namespace ViewOrdersRow {
        export const nameProperty = 'OrderNumber';
        export const localTextPrefix = 'DIS.ViewOrders';

        export namespace Fields {
            export declare const OrderId: string;
            export declare const OrderNumber: string;
            export declare const OrderDate: string;
            export declare const CustomerDealerId: string;
            export declare const UserId: string;
            export declare const ProductTypeId: string;
            export declare const KmInUse: string;
            export declare const PaymentService: string;
            export declare const OrderStatus: string;
            export declare const OrderDetailId: string;
            export declare const ProductId: string;
            export declare const OrderQty: string;
            export declare const ProductPriceId: string;
            export declare const CostId: string;
            export declare const OrderCategoryId: string;
            export declare const BasePrice: string;
            export declare const Total: string;
            export declare const Ppn: string;
            export declare const ServiceQuantity: string;
            export declare const ServiceUnitDetailId: string;
            export declare const CustomerDealerName: string;
            export declare const Address: string;
            export declare const ProductTypeName: string;
            export declare const ProductName: string;
            export declare const ProductNumber: string;
            export declare const PartNumber: string;
            export declare const ProductCategoryId: string;
            export declare const Discontinued: string;
            export declare const ProductImage: string;
            export declare const Description: string;
            export declare const BinLocation: string;
            export declare const Merek: string;
            export declare const PoliceNumber: string;
            export declare const MachineNo: string;
            export declare const SerialNumber: string;
            export declare const Color: string;
            export declare const ManufactureYear: string;
            export declare const ServiceUnitId: string;
            export declare const ServiceCharge: string;
            export declare const ServiceDate: string;
            export declare const OrderIdService: string;
        }

        ['OrderId', 'OrderNumber', 'OrderDate', 'CustomerDealerId', 'UserId', 'ProductTypeId', 'KmInUse', 'PaymentService', 'OrderStatus', 'OrderDetailId', 'ProductId', 'OrderQty', 'ProductPriceId', 'CostId', 'OrderCategoryId', 'BasePrice', 'Total', 'Ppn', 'ServiceQuantity', 'ServiceUnitDetailId', 'CustomerDealerName', 'Address', 'ProductTypeName', 'ProductName', 'ProductNumber', 'PartNumber', 'ProductCategoryId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'Color', 'ManufactureYear', 'ServiceUnitId', 'ServiceCharge', 'ServiceDate', 'OrderIdService'].forEach(x => (<any>Fields)[x] = x);
    }
}

