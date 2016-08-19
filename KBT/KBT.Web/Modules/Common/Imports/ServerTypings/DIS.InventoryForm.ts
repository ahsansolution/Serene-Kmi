namespace KBT.DIS {
    export class InventoryForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Inventory';

    }

    export interface InventoryForm {
        ProductId: ProductLookupEditor;
        OrderCategoryId: Serenity.LookupEditor;
        Qty: Serenity.IntegerEditor;
    }

    [['ProductId', () => ProductLookupEditor], ['OrderCategoryId', () => Serenity.LookupEditor], ['Qty', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(InventoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

