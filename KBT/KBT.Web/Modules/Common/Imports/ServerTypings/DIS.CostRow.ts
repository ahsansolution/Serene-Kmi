namespace KBT.DIS {
    export interface CostRow {
        CostId?: number;
        CostName?: string;
        Amount?: number;
        Percentage?: number;
    }

    export namespace CostRow {
        export const idProperty = 'CostId';
        export const nameProperty = 'CostName';
        export const localTextPrefix = 'DIS.Cost';
        export const lookupKey = 'DIS.Cost';

        export function getLookup(): Q.Lookup<CostRow> {
            return Q.getLookup<CostRow>('DIS.Cost');
        }

        export namespace Fields {
            export declare const CostId: string;
            export declare const CostName: string;
            export declare const Amount: string;
            export declare const Percentage: string;
        }

        ['CostId', 'CostName', 'Amount', 'Percentage'].forEach(x => (<any>Fields)[x] = x);
    }
}

