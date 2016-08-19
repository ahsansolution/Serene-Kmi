
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ViewPurchaseOrderDialog extends Serenity.EntityDialog<ViewPurchaseOrderRow, any> {
        protected getFormKey() { return ViewPurchaseOrderForm.formKey; }
        protected getLocalTextPrefix() { return ViewPurchaseOrderRow.localTextPrefix; }
        protected getNameProperty() { return ViewPurchaseOrderRow.nameProperty; }
        protected getService() { return ViewPurchaseOrderService.baseUrl; }

        protected form = new ViewPurchaseOrderForm(this.idPrefix);
    }
}