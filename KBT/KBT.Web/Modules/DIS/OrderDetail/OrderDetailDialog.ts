
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OrderDetailDialog extends Serenity.EntityDialog<OrderDetailRow, any> {
        protected getFormKey() { return OrderDetailForm.formKey; }
        protected getIdProperty() { return OrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }
        protected getService() { return OrderDetailService.baseUrl; }

        protected form = new OrderDetailForm(this.idPrefix);
    }
}