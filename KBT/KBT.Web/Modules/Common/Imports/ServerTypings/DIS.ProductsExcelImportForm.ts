namespace KBT.DIS {
    export class ProductsExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ProductsExcelImport';

    }

    export interface ProductsExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    [['FileName', () => Serenity.ImageUploadEditor]].forEach(x => Object.defineProperty(ProductsExcelImportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

