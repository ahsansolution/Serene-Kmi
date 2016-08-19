namespace KBT.DIS {
    export interface OrderCategoryRow {
        OrderCategoryId?: number;
        OrderCategoryName?: string;
        Description?: string;
    }

    export namespace OrderCategoryRow {
        export const idProperty = 'OrderCategoryId';
        export const nameProperty = 'OrderCategoryName';
        export const localTextPrefix = 'DIS.OrderCategory';
        export const lookupKey = 'DIS.OrderCategory';

        export function getLookup(): Q.Lookup<OrderCategoryRow> {
            return Q.getLookup<OrderCategoryRow>('DIS.OrderCategory');
        }

        export namespace Fields {
            export declare const OrderCategoryId: string;
            export declare const OrderCategoryName: string;
            export declare const Description: string;
        }

        ['OrderCategoryId', 'OrderCategoryName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

