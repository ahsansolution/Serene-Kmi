namespace KBT.DIS {
    export class ViewProductUnitForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ViewProductUnit';

    }

    export interface ViewProductUnitForm {
        OrderNumber: Serenity.StringEditor;
        CustomerDealerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
        Color: Serenity.StringEditor;
        OrderId: Serenity.IntegerEditor;
        OrderDate: Serenity.DateEditor;
    }

    [['OrderNumber', () => Serenity.StringEditor], ['CustomerDealerName', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor], ['ProductName', () => Serenity.StringEditor], ['SerialNumber', () => Serenity.StringEditor], ['ManufactureYear', () => Serenity.IntegerEditor], ['Color', () => Serenity.StringEditor], ['OrderId', () => Serenity.IntegerEditor], ['OrderDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ViewProductUnitForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

