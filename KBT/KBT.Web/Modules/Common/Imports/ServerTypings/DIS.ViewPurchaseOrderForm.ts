namespace KBT.DIS {
    export class ViewPurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ViewPurchaseOrder';

    }

    export interface ViewPurchaseOrderForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        PurchaseOrderNumber: Serenity.StringEditor;
        CompanyId: Serenity.IntegerEditor;
        PurchaseOrderDate: Serenity.DateEditor;
        CostId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        PurchaseOrderStatus: Serenity.StringEditor;
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.DecimalEditor;
    }

    [['PurchaseOrderId', () => Serenity.IntegerEditor], ['PurchaseOrderNumber', () => Serenity.StringEditor], ['CompanyId', () => Serenity.IntegerEditor], ['PurchaseOrderDate', () => Serenity.DateEditor], ['CostId', () => Serenity.IntegerEditor], ['OrderCategoryId', () => Serenity.IntegerEditor], ['PurchaseOrderStatus', () => Serenity.StringEditor], ['OrderCategoryName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['CompanyName', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor], ['Fax', () => Serenity.StringEditor], ['Logo', () => Serenity.StringEditor], ['Phone', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ViewPurchaseOrderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

