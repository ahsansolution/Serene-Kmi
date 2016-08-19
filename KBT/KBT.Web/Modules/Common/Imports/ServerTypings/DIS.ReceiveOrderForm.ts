namespace KBT.DIS {
    export class ReceiveOrderForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ReceiveOrder';

    }

    export interface ReceiveOrderForm {
        ReceiveOrderNumber: Serenity.StringEditor;
        ReceiveDate: Serenity.DateEditor;
        ReceiveBy: Serenity.StringEditor;
        AcknowledgeBy: Serenity.StringEditor;
        DetailList: ReceiveOrderDetailEditor;
    }

    [['ReceiveOrderNumber', () => Serenity.StringEditor], ['ReceiveDate', () => Serenity.DateEditor], ['ReceiveBy', () => Serenity.StringEditor], ['AcknowledgeBy', () => Serenity.StringEditor], ['DetailList', () => ReceiveOrderDetailEditor]].forEach(x => Object.defineProperty(ReceiveOrderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

