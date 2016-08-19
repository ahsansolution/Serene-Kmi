namespace KBT.DIS {
    export class ProductAlternativeForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ProductAlternative';

    }

    export interface ProductAlternativeForm {
        ProductIdAlt: ProductLookupEditor;
        SeqNo: Serenity.IntegerEditor;
    }

    [['ProductIdAlt', () => ProductLookupEditor], ['SeqNo', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ProductAlternativeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

