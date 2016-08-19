namespace KBT.DIS {
    export class ProductBasePriceForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ProductBasePrice';

    }

    export interface ProductBasePriceForm {
        ProductID: ProductLookupEditor;
        Price: Serenity.DecimalEditor;
        EntryDate: Serenity.DateEditor;
        IsActive: Serenity.BooleanEditor;
    }

    [['ProductID', () => ProductLookupEditor], ['Price', () => Serenity.DecimalEditor], ['EntryDate', () => Serenity.DateEditor], ['IsActive', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(ProductBasePriceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

