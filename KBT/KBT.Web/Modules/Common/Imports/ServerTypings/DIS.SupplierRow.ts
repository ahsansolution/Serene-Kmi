namespace KBT.DIS {
    export interface SupplierRow {
        SupplierId?: number;
        SupplierName?: string;
        Address?: string;
        Phone?: string;
        ContactName?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'SupplierName';
        export const localTextPrefix = 'DIS.Supplier';

        export namespace Fields {
            export declare const SupplierId: string;
            export declare const SupplierName: string;
            export declare const Address: string;
            export declare const Phone: string;
            export declare const ContactName: string;
        }

        ['SupplierId', 'SupplierName', 'Address', 'Phone', 'ContactName'].forEach(x => (<any>Fields)[x] = x);
    }
}

