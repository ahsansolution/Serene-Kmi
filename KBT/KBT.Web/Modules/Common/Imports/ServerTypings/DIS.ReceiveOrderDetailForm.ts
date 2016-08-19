namespace KBT.DIS {
    export class ReceiveOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ReceiveOrderDetail';

    }

    export interface ReceiveOrderDetailForm {
        ReceiveOrderId: Serenity.IntegerEditor;
        ProductId: ProductLookupEditor;
        POQty: Serenity.IntegerEditor;
        BackOrderQty: Serenity.IntegerEditor;
        Price: Serenity.StringEditor;
        BinLocation: Serenity.StringEditor;
        ReceiveComplete: Serenity.BooleanEditor;
    }

    [['ReceiveOrderId', () => Serenity.IntegerEditor], ['ProductId', () => ProductLookupEditor], ['POQty', () => Serenity.IntegerEditor], ['BackOrderQty', () => Serenity.IntegerEditor], ['Price', () => Serenity.StringEditor], ['BinLocation', () => Serenity.StringEditor], ['ReceiveComplete', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(ReceiveOrderDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

