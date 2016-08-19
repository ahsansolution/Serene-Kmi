namespace KBT.DIS {
    export class ViewProductStockForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ViewProductStock';

    }

    export interface ViewProductStockForm {
        ProductId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
        ProductNumber: Serenity.StringEditor;
        ProductTypeName: Serenity.StringEditor;
        TotalIn: Serenity.IntegerEditor;
        TotalOut: Serenity.IntegerEditor;
        Stock: Serenity.IntegerEditor;
    }

    [['ProductId', () => Serenity.IntegerEditor], ['ProductName', () => Serenity.StringEditor], ['ProductNumber', () => Serenity.StringEditor], ['ProductTypeName', () => Serenity.StringEditor], ['TotalIn', () => Serenity.IntegerEditor], ['TotalOut', () => Serenity.IntegerEditor], ['Stock', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ViewProductStockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

