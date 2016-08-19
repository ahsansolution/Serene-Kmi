namespace KBT.DIS {
    export interface CustomerDealerRow {
        CustomerDealerId?: number;
        CustomerDealerName?: string;
        Address?: string;
    }

    export namespace CustomerDealerRow {
        export const idProperty = 'CustomerDealerId';
        export const nameProperty = 'CustomerDealerName';
        export const localTextPrefix = 'DIS.CustomerDealer';
        export const lookupKey = 'DIS.CustomerDealer';

        export function getLookup(): Q.Lookup<CustomerDealerRow> {
            return Q.getLookup<CustomerDealerRow>('DIS.CustomerDealer');
        }

        export namespace Fields {
            export declare const CustomerDealerId: string;
            export declare const CustomerDealerName: string;
            export declare const Address: string;
        }

        ['CustomerDealerId', 'CustomerDealerName', 'Address'].forEach(x => (<any>Fields)[x] = x);
    }
}

