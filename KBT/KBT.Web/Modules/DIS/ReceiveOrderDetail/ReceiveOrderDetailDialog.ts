
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReceiveOrderDetailDialog extends Serenity.EntityDialog<ReceiveOrderDetailRow, any> {
        protected getFormKey() { return ReceiveOrderDetailForm.formKey; }
        protected getIdProperty() { return ReceiveOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiveOrderDetailRow.localTextPrefix; }
        protected getNameProperty() { return ReceiveOrderDetailRow.nameProperty; }
        protected getService() { return ReceiveOrderDetailService.baseUrl; }

        protected form = new ReceiveOrderDetailForm(this.idPrefix);
    }
}