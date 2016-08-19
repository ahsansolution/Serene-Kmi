namespace KBT.DIS {
    export class ProductPriceForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ProductPrice';

    }

    export interface ProductPriceForm {
        ProductId: ProductLookupEditor;
        OrderCategoryId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        IsActive: Serenity.BooleanEditor;
        EntryDate: Serenity.DateEditor;
    }

    [['ProductId', () => ProductLookupEditor], ['OrderCategoryId', () => Serenity.LookupEditor], ['Price', () => Serenity.DecimalEditor], ['IsActive', () => Serenity.BooleanEditor], ['EntryDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(ProductPriceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

