namespace KBT.DIS {
    export interface OrderDetailRow {
        OrderDetailId?: number;
        OrderId?: number;
        ProductID?: number;
        OrderQty?: number;
        ProductPriceId?: number;
        CostId?: number;
        OrderOrderDate?: string;
        OrderCustomerDealerId?: number;
        OrderUserId?: number;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        ProductPriceProductId?: number;
        ProductPriceOrderCategoryId?: number;
        ProductPricePrice?: number;
        ProductPriceIsActive?: boolean;
        ProductPriceEntryDate?: string;
        CostCostName?: string;
        CostAmount?: number;
        CostTotal?: number;
        BasePrice?: number;
        LineTotal?: number;
        CostPercentage?: number;
        KmInUse?: number;
        ServiceQuantity?: number;
        OrderCategoryId?: number;
        OrderCategoryName?: string;
        Stock?: number;
        OrderDetailProductMachineNo?: string;
        OrderDetailProductSerialNumber?: string;
        OrderDetailProductColor?: string;
        OrderDetailProductManufactureYear?: number;
        ServiceUnitDetailId?: number;
    }

    export namespace OrderDetailRow {
        export const idProperty = 'OrderDetailId';
        export const localTextPrefix = 'DIS.OrderDetail';

        export namespace Fields {
            export declare const OrderDetailId: string;
            export declare const OrderId: string;
            export declare const ProductID: string;
            export declare const OrderQty: string;
            export declare const ProductPriceId: string;
            export declare const CostId: string;
            export declare const OrderOrderDate: string;
            export declare const OrderCustomerDealerId: string;
            export declare const OrderUserId: string;
            export declare const ProductProductName: string;
            export declare const ProductProductNumber: string;
            export declare const ProductProductCategoryId: string;
            export declare const ProductProductTypeId: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductDescription: string;
            export declare const ProductBinLocation: string;
            export declare const ProductPriceProductId: string;
            export declare const ProductPriceOrderCategoryId: string;
            export declare const ProductPricePrice: string;
            export declare const ProductPriceIsActive: string;
            export declare const ProductPriceEntryDate: string;
            export declare const CostCostName: string;
            export declare const CostAmount: string;
            export declare const CostTotal: string;
            export declare const BasePrice: string;
            export declare const LineTotal: string;
            export declare const CostPercentage: string;
            export declare const KmInUse: string;
            export declare const ServiceQuantity: string;
            export declare const OrderCategoryId: string;
            export declare const OrderCategoryName: string;
            export declare const Stock: string;
            export declare const OrderDetailProductMachineNo: string;
            export declare const OrderDetailProductSerialNumber: string;
            export declare const OrderDetailProductColor: string;
            export declare const OrderDetailProductManufactureYear: string;
            export declare const ServiceUnitDetailId: string;
        }

        ['OrderDetailId', 'OrderId', 'ProductID', 'OrderQty', 'ProductPriceId', 'CostId', 'OrderOrderDate', 'OrderCustomerDealerId', 'OrderUserId', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'ProductPriceProductId', 'ProductPriceOrderCategoryId', 'ProductPricePrice', 'ProductPriceIsActive', 'ProductPriceEntryDate', 'CostCostName', 'CostAmount', 'CostTotal', 'BasePrice', 'LineTotal', 'CostPercentage', 'KmInUse', 'ServiceQuantity', 'OrderCategoryId', 'OrderCategoryName', 'Stock', 'OrderDetailProductMachineNo', 'OrderDetailProductSerialNumber', 'OrderDetailProductColor', 'OrderDetailProductManufactureYear', 'ServiceUnitDetailId'].forEach(x => (<any>Fields)[x] = x);
    }
}

