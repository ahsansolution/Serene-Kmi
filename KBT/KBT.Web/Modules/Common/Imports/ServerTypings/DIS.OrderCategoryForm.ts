namespace KBT.DIS {
    export class OrderCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.OrderCategory';

    }

    export interface OrderCategoryForm {
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['OrderCategoryName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(OrderCategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

