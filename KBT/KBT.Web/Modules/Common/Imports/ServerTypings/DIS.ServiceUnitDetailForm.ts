namespace KBT.DIS {
    export class ServiceUnitDetailForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ServiceUnitDetail';

    }

    export interface ServiceUnitDetailForm {
        ServiceCharge: Serenity.DecimalEditor;
        KmInUse: Serenity.IntegerEditor;
        ServiceDate: Serenity.DateEditor;
        DetailList: OrderDetailEditor;
    }

    [['ServiceCharge', () => Serenity.DecimalEditor], ['KmInUse', () => Serenity.IntegerEditor], ['ServiceDate', () => Serenity.DateEditor], ['DetailList', () => OrderDetailEditor]].forEach(x => Object.defineProperty(ServiceUnitDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

