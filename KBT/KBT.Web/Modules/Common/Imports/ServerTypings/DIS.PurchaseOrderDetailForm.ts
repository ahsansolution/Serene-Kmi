namespace KBT.DIS {
    export class PurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.PurchaseOrderDetail';

    }

    export interface PurchaseOrderDetailForm {
        ProductId: ProductLookupEditor;
        Quantity: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        ProductPriceId: Serenity.IntegerEditor;
        ProductSerialNumber: Serenity.StringEditor;
        ProductColor: Serenity.StringEditor;
        ProductManufactureYear: Serenity.StringEditor;
    }

    [['ProductId', () => ProductLookupEditor], ['Quantity', () => Serenity.IntegerEditor], ['Price', () => Serenity.DecimalEditor], ['ProductPriceId', () => Serenity.IntegerEditor], ['ProductSerialNumber', () => Serenity.StringEditor], ['ProductColor', () => Serenity.StringEditor], ['ProductManufactureYear', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PurchaseOrderDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

