namespace KBT.DIS {
    export class ProductCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ProductCategory';

    }

    export interface ProductCategoryForm {
        ProductCategoryName: Serenity.StringEditor;
    }

    [['ProductCategoryName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ProductCategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

