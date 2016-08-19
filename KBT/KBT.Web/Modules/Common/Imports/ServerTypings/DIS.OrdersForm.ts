namespace KBT.DIS {
    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.Orders';

    }

    export interface OrdersForm {
        CustomerDealerId: Serenity.LookupEditor;
        ProductTypeID: Serenity.LookupEditor;
        DetailList: OrderDetailEditor;
    }

    [['CustomerDealerId', () => Serenity.LookupEditor], ['ProductTypeID', () => Serenity.LookupEditor], ['DetailList', () => OrderDetailEditor]].forEach(x => Object.defineProperty(OrdersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

