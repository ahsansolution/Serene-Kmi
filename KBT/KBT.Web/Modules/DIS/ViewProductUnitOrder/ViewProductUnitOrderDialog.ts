
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ViewProductUnitOrderDialog extends Serenity.EntityDialog<ViewProductUnitOrderRow, any> {
        protected getFormKey() { return ViewProductUnitOrderForm.formKey; }
        protected getLocalTextPrefix() { return ViewProductUnitOrderRow.localTextPrefix; }
        protected getNameProperty() { return ViewProductUnitOrderRow.nameProperty; }
        protected getService() { return ViewProductUnitOrderService.baseUrl; }

        protected form = new ViewProductUnitOrderForm(this.idPrefix);
    }
}