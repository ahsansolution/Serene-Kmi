namespace KBT.DIS {
    export class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.OrderDetail';

    }

    export interface OrderDetailForm {
        ProductID: ProductLookupEditor;
        OrderQty: Serenity.IntegerEditor;
        BasePrice: Serenity.DecimalEditor;
        Stock: Serenity.IntegerEditor;
        OrderDetailProductSerialNumber: Serenity.StringEditor;
        OrderDetailProductColor: Serenity.StringEditor;
        OrderDetailProductManufactureYear: Serenity.IntegerEditor;
    }

    [['ProductID', () => ProductLookupEditor], ['OrderQty', () => Serenity.IntegerEditor], ['BasePrice', () => Serenity.DecimalEditor], ['Stock', () => Serenity.IntegerEditor], ['OrderDetailProductSerialNumber', () => Serenity.StringEditor], ['OrderDetailProductColor', () => Serenity.StringEditor], ['OrderDetailProductManufactureYear', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(OrderDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

