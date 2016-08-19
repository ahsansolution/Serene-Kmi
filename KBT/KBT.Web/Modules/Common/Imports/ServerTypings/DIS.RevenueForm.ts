namespace KBT.DIS {
    export class RevenueForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Revenue';

    }

    export interface RevenueForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        OrderId: Serenity.IntegerEditor;
        Credit: Serenity.DecimalEditor;
        Debit: Serenity.DecimalEditor;
        EntryDate: Serenity.DateEditor;
        DocumentNo: Serenity.StringEditor;
        CancelationStatus: Serenity.BooleanEditor;
    }

    [['PurchaseOrderId', () => Serenity.IntegerEditor], ['OrderId', () => Serenity.IntegerEditor], ['Credit', () => Serenity.DecimalEditor], ['Debit', () => Serenity.DecimalEditor], ['EntryDate', () => Serenity.DateEditor], ['DocumentNo', () => Serenity.StringEditor], ['CancelationStatus', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(RevenueForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

