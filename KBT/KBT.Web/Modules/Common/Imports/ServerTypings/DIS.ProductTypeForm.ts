namespace KBT.DIS {
    export class ProductTypeForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ProductType';

    }

    export interface ProductTypeForm {
        ProductTypeName: Serenity.StringEditor;
    }

    [['ProductTypeName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ProductTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

