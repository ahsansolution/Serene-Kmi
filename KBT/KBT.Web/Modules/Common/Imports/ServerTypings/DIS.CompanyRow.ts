namespace KBT.DIS {
    export interface CompanyRow {
        CompanyId?: number;
        CompanyName?: string;
        Address?: string;
        Fax?: string;
        Logo?: string;
        Phone?: number;
    }

    export namespace CompanyRow {
        export const idProperty = 'CompanyId';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'DIS.Company';
        export const lookupKey = 'DIS.Company';

        export function getLookup(): Q.Lookup<CompanyRow> {
            return Q.getLookup<CompanyRow>('DIS.Company');
        }

        export namespace Fields {
            export declare const CompanyId: string;
            export declare const CompanyName: string;
            export declare const Address: string;
            export declare const Fax: string;
            export declare const Logo: string;
            export declare const Phone: string;
        }

        ['CompanyId', 'CompanyName', 'Address', 'Fax', 'Logo', 'Phone'].forEach(x => (<any>Fields)[x] = x);
    }
}

