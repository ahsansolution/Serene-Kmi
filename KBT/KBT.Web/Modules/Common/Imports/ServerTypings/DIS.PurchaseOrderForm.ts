namespace KBT.DIS {
    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.PurchaseOrder';

    }

    export interface PurchaseOrderForm {
        PurchaseOrderNumber: Serenity.StringEditor;
        PurchaseOrderDate: Serenity.DateEditor;
        OrderCategoryId: Serenity.LookupEditor;
        ProductTypeId: Serenity.LookupEditor;
        DetailList: PurchaseOrderDetailEditor;
    }

    [['PurchaseOrderNumber', () => Serenity.StringEditor], ['PurchaseOrderDate', () => Serenity.DateEditor], ['OrderCategoryId', () => Serenity.LookupEditor], ['ProductTypeId', () => Serenity.LookupEditor], ['DetailList', () => PurchaseOrderDetailEditor]].forEach(x => Object.defineProperty(PurchaseOrderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

