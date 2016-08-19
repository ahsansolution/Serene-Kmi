namespace KBT.DIS {
    export class CustomerDealerForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.CustomerDealer';

    }

    export interface CustomerDealerForm {
        CustomerDealerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }

    [['CustomerDealerName', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CustomerDealerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

