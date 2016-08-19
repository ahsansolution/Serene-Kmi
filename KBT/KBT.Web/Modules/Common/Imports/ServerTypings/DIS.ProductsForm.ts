namespace KBT.DIS {
    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Products';

    }

    export interface ProductsForm {
        ProductTypeId: Serenity.LookupEditor;
        Discontinued: Serenity.BooleanEditor;
        UnitStock: UnitStockEditor;
        PartNumber: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
        ProductAltList: ProductAlternativeEditor;
    }

    [['ProductTypeId', () => Serenity.LookupEditor], ['Discontinued', () => Serenity.BooleanEditor], ['UnitStock', () => UnitStockEditor], ['PartNumber', () => Serenity.StringEditor], ['ProductName', () => Serenity.StringEditor], ['SerialNumber', () => Serenity.StringEditor], ['Color', () => Serenity.StringEditor], ['ManufactureYear', () => Serenity.IntegerEditor], ['ProductAltList', () => ProductAlternativeEditor]].forEach(x => Object.defineProperty(ProductsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

