
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ViewOrdersDialog extends Serenity.EntityDialog<ViewOrdersRow, any> {
        protected getFormKey() { return ViewOrdersForm.formKey; }
        protected getLocalTextPrefix() { return ViewOrdersRow.localTextPrefix; }
        protected getNameProperty() { return ViewOrdersRow.nameProperty; }
        protected getService() { return ViewOrdersService.baseUrl; }

        protected form = new ViewOrdersForm(this.idPrefix);
    }
}