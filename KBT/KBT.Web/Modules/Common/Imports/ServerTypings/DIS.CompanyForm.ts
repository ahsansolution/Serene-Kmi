namespace KBT.DIS {
    export class CompanyForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Company';

    }

    export interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.DecimalEditor;
    }

    [['CompanyName', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor], ['Fax', () => Serenity.StringEditor], ['Logo', () => Serenity.StringEditor], ['Phone', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(CompanyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

