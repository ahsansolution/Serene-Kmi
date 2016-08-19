
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ViewPurchaseOrderDetailDialog extends Serenity.EntityDialog<ViewPurchaseOrderDetailRow, any> {
        protected getFormKey() { return ViewPurchaseOrderDetailForm.formKey; }
        protected getLocalTextPrefix() { return ViewPurchaseOrderDetailRow.localTextPrefix; }
        protected getNameProperty() { return ViewPurchaseOrderDetailRow.nameProperty; }
        protected getService() { return ViewPurchaseOrderDetailService.baseUrl; }

        protected form = new ViewPurchaseOrderDetailForm(this.idPrefix);
    }
}