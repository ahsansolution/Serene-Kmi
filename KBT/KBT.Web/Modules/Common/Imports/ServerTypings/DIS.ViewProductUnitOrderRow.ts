namespace KBT.DIS {
    export interface ViewProductUnitOrderRow {
        OrderDetailId?: number;
        OrderId?: number;
        ProductId?: number;
        OrderQty?: number;
        ProductPriceId?: number;
        CostId?: number;
        OrderCategoryId?: number;
        BasePrice?: number;
        Total?: number;
        Ppn?: number;
        KmInUse?: number;
        ServiceQuantity?: number;
        OrderNumber?: string;
        OrderDate?: string;
        CustomerDealerId?: number;
        UserId?: number;
        ProductTypeId?: number;
        ProductUnitId?: number;
        OrderProductSerialNumber?: string;
        OrderProductColor?: string;
        OrderProductManufactureYear?: number;
        PaymentService?: number;
        OrderStatus?: string;
        ProductName?: string;
        ProductNumber?: string;
        ProductNumberName?: string;
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
        ProductTypeName?: string;
    }

    export namespace ViewProductUnitOrderRow {
        export const idProperty = 'OrderDetailId';
        export const nameProperty = 'OrderNumber';
        export const localTextPrefix = 'DIS.ViewProductUnitOrder';
        export const lookupKey = 'DIS.ProductUnitLookup1';

        export function getLookup(): Q.Lookup<ViewProductUnitOrderRow> {
            return Q.getLookup<ViewProductUnitOrderRow>('DIS.ProductUnitLookup1');
        }

        export namespace Fields {
            export declare const OrderDetailId: string;
            export declare const OrderId: string;
            export declare const ProductId: string;
            export declare const OrderQty: string;
            export declare const ProductPriceId: string;
            export declare const CostId: string;
            export declare const OrderCategoryId: string;
            export declare const BasePrice: string;
            export declare const Total: string;
            export declare const Ppn: string;
            export declare const KmInUse: string;
            export declare const ServiceQuantity: string;
            export declare const OrderNumber: string;
            export declare const OrderDate: string;
            export declare const CustomerDealerId: string;
            export declare const UserId: string;
            export declare const ProductTypeId: string;
            export declare const ProductUnitId: string;
            export declare const OrderProductSerialNumber: string;
            export declare const OrderProductColor: string;
            export declare const OrderProductManufactureYear: string;
            export declare const PaymentService: string;
            export declare const OrderStatus: string;
            export declare const ProductName: string;
            export declare const ProductNumber: string;
            export declare const ProductNumberName: string;
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
            export declare const ProductTypeName: string;
        }

        ['OrderDetailId', 'OrderId', 'ProductId', 'OrderQty', 'ProductPriceId', 'CostId', 'OrderCategoryId', 'BasePrice', 'Total', 'Ppn', 'KmInUse', 'ServiceQuantity', 'OrderNumber', 'OrderDate', 'CustomerDealerId', 'UserId', 'ProductTypeId', 'ProductUnitId', 'OrderProductSerialNumber', 'OrderProductColor', 'OrderProductManufactureYear', 'PaymentService', 'OrderStatus', 'ProductName', 'ProductNumber', 'ProductNumberName', 'PartNumber', 'ProductCategoryId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'Color', 'ManufactureYear', 'ProductTypeName'].forEach(x => (<any>Fields)[x] = x);
    }
}

