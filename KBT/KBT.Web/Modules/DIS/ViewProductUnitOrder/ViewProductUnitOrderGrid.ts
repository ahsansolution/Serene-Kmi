
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ViewProductUnitOrderGrid extends Serenity.EntityGrid<ViewProductUnitOrderRow, any> {
        protected getColumnsKey() { return 'DIS.ViewProductUnitOrder'; }
        protected getDialogType() { return ViewProductUnitOrderDialog; }
        protected getLocalTextPrefix() { return ViewProductUnitOrderRow.localTextPrefix; }
        protected getService() { return ViewProductUnitOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}