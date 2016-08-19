
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ViewPurchaseOrderDetailGrid extends Serenity.EntityGrid<ViewPurchaseOrderDetailRow, any> {
        protected getColumnsKey() { return 'DIS.ViewPurchaseOrderDetail'; }
        protected getDialogType() { return ViewPurchaseOrderDetailDialog; }
        protected getLocalTextPrefix() { return ViewPurchaseOrderDetailRow.localTextPrefix; }
        protected getService() { return ViewPurchaseOrderDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}