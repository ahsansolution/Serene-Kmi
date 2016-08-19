namespace KBT.DIS {
    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Supplier';

    }

    export interface SupplierForm {
        SupplierName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
    }

    [['SupplierName', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['ContactName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SupplierForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

