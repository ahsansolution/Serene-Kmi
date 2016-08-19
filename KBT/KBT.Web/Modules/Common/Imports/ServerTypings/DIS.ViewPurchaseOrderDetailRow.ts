namespace KBT.DIS {
    export interface ViewPurchaseOrderDetailRow {
        PurchaseOrderDetailId?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        Price?: number;
        Ppn?: number;
        Total?: number;
        ProductPriceId?: number;
        ProductName?: string;
        ProductNumber?: string;
        PartNumber?: string;
        ProductCategoryId?: number;
        ProductTypeId?: number;
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
    }

    export namespace ViewPurchaseOrderDetailRow {
        export const idProperty = 'PurchaseOrderDetailId';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'DIS.ViewPurchaseOrderDetail';

        export namespace Fields {
            export declare const PurchaseOrderDetailId: string;
            export declare const PurchaseOrderId: string;
            export declare const ProductId: string;
            export declare const Quantity: string;
            export declare const Price: string;
            export declare const Ppn: string;
            export declare const Total: string;
            export declare const ProductPriceId: string;
            export declare const ProductName: string;
            export declare const ProductNumber: string;
            export declare const PartNumber: string;
            export declare const ProductCategoryId: string;
            export declare const ProductTypeId: string;
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
        }

        ['PurchaseOrderDetailId', 'PurchaseOrderId', 'ProductId', 'Quantity', 'Price', 'Ppn', 'Total', 'ProductPriceId', 'ProductName', 'ProductNumber', 'PartNumber', 'ProductCategoryId', 'ProductTypeId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'Color', 'ManufactureYear'].forEach(x => (<any>Fields)[x] = x);
    }
}

