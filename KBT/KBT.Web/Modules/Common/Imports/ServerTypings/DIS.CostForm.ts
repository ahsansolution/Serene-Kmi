namespace KBT.DIS {
    export class CostForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Cost';

    }

    export interface CostForm {
        CostName: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        Percentage: Serenity.IntegerEditor;
    }

    [['CostName', () => Serenity.StringEditor], ['Amount', () => Serenity.DecimalEditor], ['Percentage', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(CostForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

