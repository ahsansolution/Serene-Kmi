
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ViewPurchaseOrderGrid extends Serenity.EntityGrid<ViewPurchaseOrderRow, any> {
        protected getColumnsKey() { return 'DIS.ViewPurchaseOrder'; }
        protected getDialogType() { return ViewPurchaseOrderDialog; }
        protected getLocalTextPrefix() { return ViewPurchaseOrderRow.localTextPrefix; }
        protected getService() { return ViewPurchaseOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}